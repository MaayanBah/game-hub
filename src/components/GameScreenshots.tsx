import { Image, SimpleGrid } from "@chakra-ui/react";
import useGameScreenshots from "../hooks/useGameScreenshots";

interface props {
  gameId: number;
}

const Screenshots = ({ gameId }: props) => {
  const { data: Screenshots, isLoading, error } = useGameScreenshots(gameId);

  if (isLoading || !Screenshots) return null;

  if (error) throw error;
  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={2}>
      {Screenshots?.results.map((result) => (
        <Image key={result.id} src={result.image}></Image>
      ))}
    </SimpleGrid>
  );
};

export default Screenshots;
