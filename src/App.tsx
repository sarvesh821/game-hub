import { Grid, GridItem, Show} from "@chakra-ui/react"
import NavBar from "./components/NavBar"
import GameGrid from "./components/GameGrid"
import GenreList from "./components/GenreList"
import { useState } from "react"
import { Genre } from "./hooks/useGeneres"
import PlatformSelector from "./components/PlatformSelector"
import { Platform } from "./hooks/useGames"
// import GameGrid from "./components/GameGrid"

function App() {
  
const [selectGenre,setSelectGenre]=useState<Genre | null>(null);
const [selectPlatform,setSelectedPlatform]=useState<Platform | null>(null);
  return <Grid templateAreas={{
    base:`"nav" "main"`,
    lg:`"nav nav" "aside main"`
  }}
  templateColumns={{
    base:'1fr',
    lg:'250px 1fr'
  }}
  >
    <GridItem area='nav' >
    
     <NavBar></NavBar>
    </GridItem>
    <Show above='lg'>
    <GridItem area='aside' paddingX={5} >
      <GenreList onSelectGenre={(genre) => setSelectGenre(genre)} selectedGenre={selectGenre}/>
    </GridItem>
    </Show>
    <GridItem area='main' >
      <PlatformSelector selectedPlatform={selectPlatform} onSelectPlatform={(platform)=>setSelectedPlatform(platform)} />
      <GameGrid selectedGenre={selectGenre} selectedPlatform={selectPlatform}/>
      
    </GridItem>
  </Grid>
}

export default App
