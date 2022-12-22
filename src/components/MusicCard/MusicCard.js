import { Flex } from 'rebass'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import styled from 'styled-components'
import { useSetRecoilState, useRecoilValue } from 'recoil'

import { Text, PlayButton, PauseButton, MusicGif } from 'common_components'
import { useAudio } from './useAudio'
import { selectedSong, selectedPlaylist } from 'recoil/atom'

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

  &:hover img.music {
    display: none;
  }

  &:hover > div {
    display: block;
  }
`

const MusicCard = ({ playlist }) => {
  const { setSong, pauseSong, isPlaying } = useAudio()
  const setSelectedSong = useSetRecoilState(selectedSong)
  const setSelectedPlaylist = useSetRecoilState(selectedPlaylist)
  const playedSong = useRecoilValue(selectedSong)

  const handleSong = (music, index) => {
    if (playedSong?.song === music && isPlaying) {
      pauseSong()
      return
    }
    setSong(music)
    setSelectedSong({ ...playlist[index], index, playlist })
    setSelectedPlaylist(playlist)
  }

  return (
    <Flex>
      {playlist?.map(({ image, name, singer, song }, index) => (
        <MainCard style={{ backgroundColor: 'black' }} key={name}>
          <CardContent style={{ padding: 0 }}>
            <Box onClick={() => handleSong(song, index)}>
              <Image src={image} />
              {isPlaying && playedSong?.song == song ? (
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
