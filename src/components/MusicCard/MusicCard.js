import { Flex } from 'rebass'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import styled from 'styled-components'

import { Text } from 'common_components'
import { useAudio } from './useAudio'

const MainCard = styled(Card)`
  width: 200px;
  height: 300px;
  padding: 0;
  margin-right: 30px;
`

const Image = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 10px;
`

const MusicCard = ({playlist}) => {
  const { setSong } = useAudio()

  const handleSong = (music) => {
    setSong(music)
  }
  return (
    <Flex>
      {playlist?.map(({ image, name, singer, song }) => (
        <MainCard style={{ backgroundColor: 'black' }} key={name}>
          <CardContent style={{ padding: 0 }} >
            <Image src={image} onClick={() => handleSong(song)} />
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
