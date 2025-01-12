import useGenres from "../hooks/useGenres";
import usePlatforms from "../hooks/usePlatforms";
import { GameQuery } from "../entities/GameQuery";
import { Heading } from "@chakra-ui/react";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const { data: genres } = useGenres();
  const { data: platforms } = usePlatforms();

  let genre = genres?.results.find((genre) => genre.id == gameQuery.genreId);
  let platform = platforms?.results.find(
    (platform) => platform.id == gameQuery.platformId
  );
  let heading = `${platform?.name || ""} ${genre?.name || ""} Games`;
  return (
    <Heading marginY={5} fontSize="3xl" as="h1">
      {heading}
    </Heading>
  );
};

export default GameHeading;
