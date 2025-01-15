import useGameQueryStore from "../state-management/gameQuery/store";
import { Box, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import GameGrid from "../components/GameGrid";
import GameHeading from "../components/GameHeading";
import GenreList from "../components/GenreList";
import NavBar from "../components/NavBar";
import PlatformSelector from "../components/PlatformSelector";
import SortSelector from "../components/SortSelector";

function HomePage() {
  const { setSearchText } = useGameQueryStore();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  let searchText = queryParams.get("searchText");

  useEffect(() => {
    if (searchText) {
      setSearchText(searchText);
    } else {
      setSearchText("");
    }
  }, [location]);

  return (
    <Grid
      templateAreas={{
        base: `"main"`,
        lg: `"aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenreList />
        </GridItem>
      </Show>
      <GridItem area="main">
        <Box paddingLeft={10}>
          <GameHeading />
          <HStack spacing={5}>
            <PlatformSelector />
            <SortSelector />
          </HStack>
        </Box>
        <GameGrid />
      </GridItem>
    </Grid>
  );
}

export default HomePage;
