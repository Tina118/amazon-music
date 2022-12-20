import { Flex } from 'rebass'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import styled from 'styled-components'

import song1 from 'assets/featured_week/images/1.png'
import { Text } from 'common_components'
import { FeaturedSongs } from 'mockData/FeaturedSongs'

const MainCard = styled(Card)`
  width: 200px;
  height: 300px;
  padding: 0;
 margin-right:30px
`

const Image = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 10px;
`

const MusicCard = () => {
  return (
    <Flex>
      {FeaturedSongs?.map(({ image, name, singer }) => (
        <MainCard style={{ backgroundColor: 'black' }}>
          <CardContent style={{ padding: 0 }}>
            <Image src={image} />
            <Text
              color="white"
              fontSize="20px"
              lineHeight="26px"
              overflow="hidden"
              textOverflow="ellipsis"
              whiteSpace="nowrap"
              paddingInlineEnd="10px"
              marginTop="10px"
            >
              {name}
            </Text>
            <Text
              color="#ffffff99"
              fontSize="16px"
              lineHeight="26px"
              overflow="hidden"
              textOverflow="ellipsis"
              whiteSpace="nowrap"
              paddingInlineEnd="10px"
              marginTop="5px"
            >
              {singer}
            </Text>
          </CardContent>
        </MainCard>
      ))}
    </Flex>
  )
}

export default MusicCard
