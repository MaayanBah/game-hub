import { Box, Grid, GridItem, Show, Spinner } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import GameAttributes from "../components/GameAttributes";
import GameHeader from "../components/GameHeader";
import GameTrailer from "../components/GameTrailer";
import TrackGrid from "../components/TrackGrid";
import Track from "../entities/Track";
import useGame from "../hooks/useGame";
import { SearchPlaylistResult } from "../hooks/useSearchPlaylists";
import {
  fetchPlaylist,
  fetchTracks as fetchTopTracks,
} from "../services/spotify-services";
import Screenshots from "../components/GameScreenshots";

function GameDetailsPage() {
  const [playlists, setPlaylists] = useState<SearchPlaylistResult[]>([]);
  const [topTracks, setTopTracks] = useState<Track[]>([]);
  const [loadingTracks, setLoadingTracks] = useState<boolean>(true);

  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!);

  let gameName = game?.name;
  useEffect(() => {
    if (!gameName) return;
    fetchPlaylist(gameName, setPlaylists);
  }, [gameName]);

  useEffect(() => {
    if (!gameName) return;
    fetchTopTracks(playlists, setTopTracks, setLoadingTracks);
  }, [playlists]);

  if (isLoading) return <Spinner />;

  if (error || !game) throw error;

  return (
    <Grid
      templateAreas={{
        base: `"main"`,
        lg: `"main aside"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "1fr 1fr",
      }}
    >
      <GridItem area="main" paddingX={35}>
        {game && <GameHeader data={game} />}
        <Box marginTop={5}>
          <GameTrailer gameId={game.id} />
        </Box>
        <TrackGrid topTracks={topTracks} loading={loadingTracks} />
        <GameAttributes game={game} />
      </GridItem>

      <Show above="lg">
        <GridItem area="aside" paddingX={35}>
          <Screenshots gameId={game.id} />
        </GridItem>
      </Show>
    </Grid>
  );
}

export default GameDetailsPage;
