import { Flex } from 'rebass'
import { Text } from 'common_components'
import { MusicCard } from 'components'

import { FeaturedSongs } from 'mockData/FeaturedSongs'
import { RomanticSongs } from 'mockData/RomanticSongs'
import { OldSongs } from 'mockData/OldSongs'

const Content = () => {
  return (
    <Flex flexDirection="column" style={{ marginTop: '80px' }}>
      <Flex
        flexDirection="column"
        style={{
          paddingTop: '24px',
          paddingBottom: '12px',
          paddingLeft: '30px',
        }}
      >
        <Text color="white" fontSize="26px" paddingBottom="16px">
          Featured This Week
        </Text>
        <MusicCard playlist={FeaturedSongs} />
      </Flex>
      <Flex
        flexDirection="column"
        style={{
          paddingTop: '24px',
          paddingBottom: '12px',
          paddingLeft: '36px',
        }}
      >
        <Text color="white" fontSize="26px" paddingBottom="16px">
          Top Romantic Songs
        </Text>
        <MusicCard playlist={RomanticSongs} />
      </Flex>
      <Flex
        flexDirection="column"
        style={{
          paddingTop: '24px',
          paddingBottom: '12px',
          paddingLeft: '36px',
        }}
      >
        <Text color="white" fontSize="26px" paddingBottom="16px">
          Old Songs
        </Text>
        <MusicCard playlist={OldSongs} />
      </Flex>
    </Flex>
  )
}

export default Content
