import { Card, HStack, Image, Text } from "@chakra-ui/react";
import { Track } from "../hooks/usePlaylist";
import { Link } from "react-router-dom";

interface Props {
  track: Track;
}

const TrackCard = ({ track }: Props) => {
  console.log(track.external_urls.spotify);
  return (
    <Card>
      <HStack justifyContent="space-between">
        <Link to={track.external_urls.spotify}>
          <Text fontSize={"md"} as="u" paddingX={3}>
            {track.name}
          </Text>
        </Link>
        <Image src={track.album.images[0].url} width="15%" objectFit="cover" />
      </HStack>
    </Card>
  );
};

export default TrackCard;
