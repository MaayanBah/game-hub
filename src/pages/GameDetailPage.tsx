import { Grid, GridItem, SimpleGrid, Text } from "@chakra-ui/react";
import { Genre } from "../hooks/useGenres";
import { Platform } from "../hooks/useGames";
import useGame from "../hooks/useGame";
import { useParams } from "react-router-dom";
import { SearchPlaylistResult } from "../hooks/useSearchPlaylists";
import { useEffect, useState } from "react";
import {
  fetchPlaylist,
  fetchTracks as fetchTopTracks,
} from "../services/spotify-services";
import { Track } from "../hooks/usePlaylist";
import NavBar from "../components/NavBar";
import TrackCard from "../components/TrackCard";
import SongCardContainer from "../components/TrackCardContainer";
import "react-multi-carousel/lib/styles.css";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
  searchText: string;
}

function GameDetailsPage() {
  const [playlists, setPlaylists] = useState<SearchPlaylistResult[]>([]);
  const [topTracks, setTopTracks] = useState<Track[]>([]);

  const { slug } = useParams();
  const { data } = useGame(slug!);

  let gameName = data?.name;
  useEffect(() => {
    if (!gameName) return;

    fetchPlaylist(gameName, setPlaylists);
  }, [gameName]);

  useEffect(() => {
    fetchTopTracks(playlists, setTopTracks);
  }, [playlists]);

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "main aside"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "1fr 200px",
      }}
    >
      <GridItem area="nav">
        <NavBar onSearch={(searchText) => console.log(searchText)} />
      </GridItem>
      <GridItem area="main" paddingX={35}>
        <Text fontSize="3xl">{data?.name}</Text>

        <SimpleGrid>
          {topTracks.map((track) => {
            return (
              <SongCardContainer key={track.id}>
                <TrackCard track={track} />
              </SongCardContainer>
            );
          })}
        </SimpleGrid>
      </GridItem>
    </Grid>
  );
}

export default GameDetailsPage;
