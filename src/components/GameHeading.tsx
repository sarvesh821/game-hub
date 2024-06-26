import { Heading } from "@chakra-ui/react"
import { GameQuery } from "../App"

interface Props{
    gameQuery:GameQuery
}

const GameHeading = ({gameQuery}:Props) => {
    const heading=`${gameQuery.genre?.name || ''} ${gameQuery.platform?.name || ''} Games`
  return (
    <div>
      <Heading fontSize={'5xl'} marginBottom={'8px'}>{heading}</Heading>
    </div>
  )
}

export default GameHeading
