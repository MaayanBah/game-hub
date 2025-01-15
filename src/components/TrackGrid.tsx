import Track from "../entities/Track";
import { SimpleGrid } from "@chakra-ui/react";
import TrackCardContainer from "./TrackCardContainer";
import TrackCard from "./TrackCard";
import GameCardSkeleton from "./CardSkeleton";

interface Props {
  topTracks: Track[];
  loading: boolean;
}

const TrackGrid = ({ topTracks, loading }: Props) => {
  const skeletonCount = 5;
  const skeletons = Array.from(
    { length: skeletonCount },
    (_, index) => index + 1
  );

  return (
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
            <GameCardSkeleton height="1px" />
          </TrackCardContainer>
        ))}
    </SimpleGrid>
  );
};

export default TrackGrid;
