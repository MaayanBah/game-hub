import { Card, HStack, Image, Text, useColorModeValue } from "@chakra-ui/react";
import { Track } from "../entities/Track";
import { Link } from "react-router-dom";

interface Props {
  track: Track;
}

const TrackCard = ({ track }: Props) => {
  const cardBgColor = useColorModeValue("gray.100", "gray.700");
  const cardHoverBgColor = useColorModeValue("gray.200", "gray.600");
  if (track.name === "solitary") {
    console.log(track);
  }
  if (track === null) {
    return <></>;
  }

  return (
    <Card
      bg={cardBgColor}
      paddingLeft={3}
      _hover={{ bg: cardHoverBgColor }}
      paddingBottom={{ lg: 3 }}
    >
      <HStack justify="space-between">
        <Link to={track.external_urls.spotify} style={{ width: "70%" }}>
          <Text fontSize="l">{track.name}</Text>
        </Link>
        <Text fontSize="l" style={{ width: "70%" }}>
          {Math.floor((track.duration_ms / 1000 / 60) << 0)}:
          {Math.floor((track.duration_ms / 1000) % 60)
            .toString()
            .padStart(2, "0")}
        </Text>
        {track.album.name !== "" && (
          <Image
            src={track.album.images[0].url}
            width={{ base: "20%", lg: "12%" }}
            objectFit="cover"
          />
        )}
      </HStack>
    </Card>
  );
};

export default TrackCard;
