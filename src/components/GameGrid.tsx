import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./CardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { GameQuery } from "../entities/GameQuery";

interface Props {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
  const { data, error, isLoading } = useGames(gameQuery);
  const skeletonCount = 10;
  const skeletons = Array.from(
    { length: skeletonCount },
    (_, index) => index + 1
  );

  if (error) return <Text>{error}</Text>;
  return (
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
      padding={10}
      spacing={6}
    >
      {isLoading &&
        skeletons.map((id) => (
          <GameCardContainer key={id}>
            <GameCardSkeleton height="200px" />
          </GameCardContainer>
        ))}

      {data.map((game) => (
        <GameCardContainer key={game.id}>
          <GameCard game={game}></GameCard>
        </GameCardContainer>
      ))}
    </SimpleGrid>
  );
};

export default GameGrid;
