import { GameQuery } from "../entities/GameQuery";
import { Heading } from "@chakra-ui/react";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  let heading = `${gameQuery.platform?.name || ""} ${
    gameQuery.genre?.name || ""
  } Games`;
  return (
    <Heading marginY={5} fontSize="3xl" as="h1">
      {heading}
    </Heading>
  );
};

export default GameHeading;
