import { Box, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NavBar from "../components/NavBar";
import GameGrid from "../components/GameGrid";
import GenreList from "../components/GenreList";
import { useEffect, useState } from "react";
import { Genre } from "../hooks/useGenres";
import PlatformSelector from "../components/PlatformSelector";
import SortSelector from "../components/SortSelector";
import GameHeading from "../components/GameHeading";
import { GameQuery } from "../entities/GameQuery";
import { useLocation } from "react-router-dom";

function HomePage() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  let searchText = queryParams.get("searchText");

  useEffect(() => {
    if (searchText) {
      setGameQuery((prev) => ({ ...prev, searchText }));
    } else {
      setGameQuery((prev) => ({ ...prev, searchText: "" }));
    }
  }, [location]);

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area="nav">
        <NavBar
          onSearch={(searchText) => setGameQuery({ ...gameQuery, searchText })}
        />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenreList
            onSelectedGenre={(genre: Genre) => {
              setGameQuery({ ...gameQuery, genre });
            }}
            selectedGenre={gameQuery.genre}
          />
        </GridItem>
      </Show>
      <GridItem area="main">
        <Box paddingLeft={10}>
          <GameHeading gameQuery={gameQuery} />
          <HStack spacing={5}>
            <PlatformSelector
              selectedPlatform={gameQuery.platform}
              onSelectPlatform={(platform) => {
                setGameQuery({ ...gameQuery, platform });
              }}
            />
            <SortSelector
              onSelectSortOrder={(sortOrder) =>
                setGameQuery({ ...gameQuery, sortOrder })
              }
              sortOrder={gameQuery.sortOrder}
            />
          </HStack>
        </Box>
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default HomePage;
