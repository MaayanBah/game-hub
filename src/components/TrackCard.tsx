import {
  Card,
  HStack,
  Image,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import { Track } from "../entities/Track";

interface Props {
  track: Track;
}

const TrackCard = ({ track }: Props) => {
  const cardBgColor = useColorModeValue("gray.100", "gray.700");
  const cardHoverBgColor = useColorModeValue("gray.200", "gray.600");

  // Function to format the duration into MM:SS
  const formatDuration = (duration_ms: number) => {
    const minutes = Math.floor((duration_ms / 1000 / 60) << 0);
    const seconds = Math.floor((duration_ms / 1000) % 60)
      .toString()
      .padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  return (
    <Card
      bg={cardBgColor}
      paddingRight={3}
      _hover={{ bg: cardHoverBgColor }}
      paddingBottom={{ lg: 3 }}
    >
      <HStack justify="space-between" align="center">
        <HStack>
          {track.album.name !== "" && (
            <Image
              src={track.album.images[0].url}
              width={{ base: "20%", lg: "12%" }}
              objectFit="cover"
            />
          )}
          <VStack align="flex-start" width="200px">
            <a
              href={track.external_urls.spotify}
              target="_blank"
              style={{ width: "100%" }}
              rel="noopener noreferrer"
            >
              <Text
                fontWeight="semibold"
                fontSize="l"
                _hover={{ textDecoration: "underline" }}
                whiteSpace="nowrap"
                overflow="hidden"
                textOverflow="ellipsis"
              >
                {track.name}
              </Text>
            </a>
            <HStack>
              {track.artists.map((artist, index) => (
                <span key={artist.id}>
                  <a
                    href={artist.external_urls.spotify}
                    target="_blank"
                    style={{ width: "100%" }}
                    rel="noopener noreferrer"
                  >
                    <Text
                      color="gray.400"
                      fontSize="sm"
                      _hover={{ textDecoration: "underline" }}
                    >
                      {artist.name}
                      {index < track.artists.length - 1 && ", "}
                    </Text>
                  </a>
                </span>
              ))}
            </HStack>
          </VStack>
        </HStack>

        <Text textAlign="right">{formatDuration(track.duration_ms)}</Text>
      </HStack>
    </Card>
  );
};

export default TrackCard;
