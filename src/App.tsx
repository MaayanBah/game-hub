import { Grid, GridItem, Text } from "@chakra-ui/react";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
      >
        <GridItem area="nav">
          <NavBar></NavBar>
          <Text>NavBar</Text>
        </GridItem>
        <GridItem
          area="aside"
          bg="gold"
          display={{ base: "none", lg: "block" }}
        >
          Aside
        </GridItem>
        <GridItem area="main" bg="dodgerblue">
          Main
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
