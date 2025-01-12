import usePlatform from "../hooks/usePlatform";
import useGenre from "../hooks/useGenre";
import { GameQuery } from "../entities/GameQuery";
import { Heading } from "@chakra-ui/react";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  let genre = useGenre(gameQuery.genreId);
  let platform = usePlatform(gameQuery.platformId);
  let heading = `${platform?.name || ""} ${genre?.name || ""} Games`;
  return (
    <Heading marginY={5} fontSize="3xl" as="h1">
      {heading}
    </Heading>
  );
};

export default GameHeading;
