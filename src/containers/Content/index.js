import { Flex } from 'rebass'
import { Text } from 'common_components'
import { MusicCard } from 'components'

const Content = () => {
  return (
    <Flex flexDirection="column" style={{position:"absolute", top:"70px",paddingTop:"24px" ,paddingBottom:"12px" ,paddingLeft:"36px"}}>
      <Text color="white" fontSize="26px" paddingBottom="16px"  >
        Featured This Week
      </Text>
      
      <MusicCard />
    </Flex>
  )
}

export default Content
