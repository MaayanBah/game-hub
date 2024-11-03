import {
  Grid,
  GridItem,
  SimpleGrid,
  Text,
  Image,
  Show,
} from "@chakra-ui/react";
import useGame from "../hooks/useGame";
import { useParams, Link } from "react-router-dom";
import { SearchPlaylistResult } from "../hooks/useSearchPlaylists";
import { useEffect, useState } from "react";
import {
  fetchPlaylist,
  fetchTracks as fetchTopTracks,
} from "../services/spotify-services";
import { Track } from "../entities/Track";
import NavBar from "../components/NavBar";
import TrackCard from "../components/TrackCard";
import TrackCardContainer from "../components/TrackCardContainer";
import GameCardSkeleton from "../components/CardSkeleton";
import ExpandableText from "../components/ExpandableText";

function GameDetailsPage() {
  const [playlists, setPlaylists] = useState<SearchPlaylistResult[]>([]);
  const [topTracks, setTopTracks] = useState<Track[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const { slug } = useParams();
  const { data } = useGame(slug!);

  const skeletonCount = 5;
  const skeletons = Array.from(
    { length: skeletonCount },
    (_, index) => index + 1
  );

  let gameName = data?.name;
  useEffect(() => {
    if (!gameName) return;
    fetchPlaylist(gameName, setPlaylists);
  }, [gameName]);

  useEffect(() => {
    if (!gameName) return;
    fetchTopTracks(playlists, setTopTracks, setLoading);
  }, [playlists]);

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
          <>
            <Link to={data?.website}>
              <Text fontSize="3xl" marginLeft={1}>
                {data?.name}
              </Text>
            </Link>
            <ExpandableText>{data.description_raw}</ExpandableText>
          </>
        ) : (
          <></>
        )}

        <SimpleGrid marginTop={5}>
          {topTracks.map((track) => {
            return (
              <TrackCardContainer key={track.id}>
                <TrackCard track={track} />
              </TrackCardContainer>
            );
          })}
          {loading &&
            skeletons.map((id) => (
              <TrackCardContainer key={id}>
                <GameCardSkeleton height="25px" />
              </TrackCardContainer>
            ))}
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
