import { Grid, GridItem, Image, Show, Spinner } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import GameHeader from "../components/GameHeader";
import TrackGrid from "../components/TrackGrid";
import { Track } from "../entities/Track";
import useGame from "../hooks/useGame";
import { SearchPlaylistResult } from "../hooks/useSearchPlaylists";
import {
  fetchPlaylist,
  fetchTracks as fetchTopTracks,
} from "../services/spotify-services";

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

  if (error) throw error;

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
        <TrackGrid topTracks={topTracks} loading={loadingTracks} />
      </GridItem>

      <Show above="lg">
        <GridItem area="aside" paddingX={35}>
          <Image
            src={game?.background_image}
            marginLeft={-50}
            marginTop={100}
            borderRadius={30}
          />
        </GridItem>
      </Show>
    </Grid>
  );
}

export default GameDetailsPage;
