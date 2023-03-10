import { Flex } from 'rebass'
import { useState } from 'react'
import styled from 'styled-components'
import Slider from '@material-ui/core/Slider'
import { useSetRecoilState, useRecoilValue } from 'recoil'
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious'
import SkipNextIcon from '@material-ui/icons/SkipNext'
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline'
import PauseCircleOutlineIcon from '@material-ui/icons/PauseCircleOutline'

import { Text } from 'common_components'
import { useAudio } from 'components'
import { selectedSong, selectedPlaylist } from 'recoil/atom'

const Box = styled(Flex)`
  backdrop-filter: blur(30px);
  position: sticky;
  bottom: 0;
  background-color: transparent;
  color: #fff;
  width: 100%;
  height: 85px;
  padding: 7px;
  padding-top: 0;
`

const Image = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 5px;

  @media (max-width: 767px) {
    display: none;
  }
`

const Footer = () => {
  const { song, setSong, pauseSong, isPlaying, setIsPlaying } = useAudio()
  const songInfo = useRecoilValue(selectedSong)
  const setSelectedSong = useSetRecoilState(selectedSong)
  const index = songInfo?.index
  const playlist = useRecoilValue(selectedPlaylist)

  const [value, setValue] = useState(0)
  const [duration, setDuration] = useState(0)
  song &&
    song.addEventListener('timeupdate', () => {
      setValue(parseInt((song.currentTime / song.duration) * 100))
      setDuration((value * song.duration) / 100)
      if (song.currentTime === song.duration) {
        setIsPlaying(false)
      }
    })

  const handleNext = () => {
    if (index < playlist.length - 1) {
      setSong(playlist[index + 1]?.song)
      setSelectedSong({ ...playlist[index + 1], index: index + 1 })
    }
  }

  const handlePrev = () => {
    if (index > 0) {
      setSong(playlist[index - 1]?.song)
      setSelectedSong({ ...playlist[index - 1], index: index - 1 })
    }
  }

  const handleChange = ({ newValue }) => {
    setDuration((value * song.duration) / 100)
    song.currentTime = duration
    setValue(newValue)
  }

  const handlePlay = () => {
    song.currentTime = duration
    song.play()
    setIsPlaying(true)
  }

  return (
    <>
      {song && (
        <Box
          flexDirection="column"
          sx={{
            [`@media (max-width: 767px)`]: {
              alignItems: 'center',
              justifyContent: 'center',
            },
          }}
        >
          <Slider
            value={value}
            style={{ padding: 0, color: 'white', marginBottom: '10px' }}
            onChange={handleChange}
          />
          <Flex marginBottom="10px">
            <Image src={songInfo?.image} />
            <Flex
              flexDirection="column"
              marginLeft="20px"
              alignItems="flex-start"
              justifyContent="center"
              width="300px"
              marginRight="20px"
              sx={{
                [`@media (max-width: 1024px)`]: {
                  display: 'none',
                },
              }}
            >
              <Text fontSize="18px" textOverflow="ellipsis" whiteSpace="nowrap">
                {songInfo?.name}
              </Text>
              <Text
                fontSize="14px"
                color="#ffffff99"
                textOverflow="ellipsis"
                whiteSpace="nowrap"
              >
                {songInfo?.singer}
              </Text>
            </Flex>
            <Flex
              justifyContent="space-between"
              alignItems="center"
              marginLeft="100px"
              sx={{
                [`@media (max-width: 1024px)`]: {
                  marginLeft: '300px',
                },
                [`@media (max-width: 960px)`]: {
                  marginLeft: '200px',
                },
                [`@media (max-width: 768px)`]: {
                  marginLeft: '150px',
                },
                [`@media (max-width: 767px)`]: {
                  marginLeft: '0px',
                },
              }}
            >
              <SkipPreviousIcon
                style={{
                  fontSize: '60px',
                  marginRight: '100px',
                  cursor: index > 0 ? 'pointer' : '',
                  color: index > 0 ? 'white' : 'grey',
                }}
                onClick={handlePrev}
              />
              {!isPlaying ? (
                <PlayCircleOutlineIcon
                  onClick={handlePlay}
                  style={{ fontSize: '60px', cursor: 'pointer' }}
                />
              ) : (
                <PauseCircleOutlineIcon
                  onClick={pauseSong}
                  style={{ fontSize: '60px', cursor: 'pointer' }}
                />
              )}
              <SkipNextIcon
                style={{
                  fontSize: '60px',
                  marginLeft: '100px',
                  cursor: index < playlist.length - 1 ? 'pointer' : '',
                  color: index < playlist.length - 1 ? 'white' : 'grey',
                }}
                onClick={handleNext}
              />
            </Flex>
          </Flex>
        </Box>
      )}
    </>
  )
}

export default Footer
