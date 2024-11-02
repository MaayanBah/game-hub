import {
  Card,
  Grid,
  GridItem,
  SimpleGrid,
  Text,
  Image,
  Show,
} from "@chakra-ui/react";
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
import { Link } from "react-router-dom";

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

  console.log(data);
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "main aside"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "1fr 1fr",
      }}
    >
      <GridItem area="nav">
        <NavBar onSearch={(searchText) => console.log(searchText)} />
      </GridItem>
      <GridItem area="main" paddingX={35}>
        {data ? (
          <Link to={data?.website}>
            <Text fontSize="3xl" marginLeft={1}>
              {data?.name}
            </Text>
          </Link>
        ) : (
          <></>
        )}

        <SimpleGrid marginTop={5}>
          {topTracks.map((track) => {
            return (
              <SongCardContainer key={track.id}>
                <TrackCard track={track} />
              </SongCardContainer>
            );
          })}
        </SimpleGrid>
      </GridItem>

      <Show above="lg">
        <GridItem area="aside" paddingX={35}>
          <Image
            src={data?.background_image}
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
