import { useState } from 'react'
import { Flex } from 'rebass'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import styled from 'styled-components'

import { Text, PlayButton, PauseButton, MusicGif } from 'common_components'
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

const Box = styled(Flex)`
  position: relative;
  width: 100%;
  cursor: pointer;

  & > div {
    display: none;
  }

  &:hover img {
    opacity: 0.4;
  }

  &:hover img.music  {
    display: none;
  }

  &:hover > div {
    display: block;
  }
`

const MusicCard = ({ playlist }) => {
  const [lastPlayed, setLastPlayed] = useState()
  const { setSong, pauseSong, isPlaying } = useAudio()

  const handleSong = (music) => {
    if (lastPlayed === music && isPlaying) {
      pauseSong()
      return
    }
    setSong(music)
    setLastPlayed(music)
  }
  return (
    <Flex>
      {playlist?.map(({ image, name, singer, song }) => (
        <MainCard style={{ backgroundColor: 'black' }} key={name}>
          <CardContent style={{ padding: 0 }}>
            <Box onClick={() => handleSong(song)}>
              <Image src={image} />
              {isPlaying && lastPlayed === song ? (
                <>
                  <PauseButton />
                  <MusicGif />
                </>
              ) : (
                <PlayButton />
              )}
            </Box>
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
