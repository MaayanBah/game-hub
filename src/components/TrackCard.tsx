import { Card, HStack, Image, Text, useColorModeValue } from "@chakra-ui/react";
import { Track } from "../hooks/usePlaylist";
import { Link } from "react-router-dom";

interface Props {
  track: Track;
}

const TrackCard = ({ track }: Props) => {
  const cardBgColor = useColorModeValue("gray.100", "gray.700");
  return (
    <Card bg={cardBgColor} paddingLeft={3}>
      <HStack align="center">
        <Link to={track.external_urls.spotify} style={{ width: "100%" }}>
          <Text fontSize="xl" minWidth="70%">
            {track.name}
          </Text>
        </Link>
        <Image src={track.album.images[0].url} width="20%" objectFit="cover" />
      </HStack>
    </Card>
  );
};

export default TrackCard;
