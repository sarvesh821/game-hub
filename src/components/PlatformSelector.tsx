import { Button, Menu, MenuButton, MenuItem, MenuList ,Text} from "@chakra-ui/react"
import { BsChevronDown } from "react-icons/bs"
import usePlatforms from "../hooks/usePlatforms"
import { Platform } from "../hooks/useGames"

interface Props{
    onSelectPlatform:(platform:Platform)=>void;
    selectedPlatform:Platform | null
}
const PlatformSelector = ({onSelectPlatform,selectedPlatform}:Props) => {
    const {data,error}=usePlatforms();
    if (error) return null;
  return (
    
      <Menu>
           <MenuButton as={Button} rightIcon={<BsChevronDown/>}><Text>{selectedPlatform?.name || 'Platforms'}</Text></MenuButton>
           <MenuList>
           {data.map(item=><MenuItem key={item.id} onClick={()=>onSelectPlatform(item)}>{item.name}</MenuItem>)}
           </MenuList>
      </Menu>

  )
}

export default PlatformSelector
