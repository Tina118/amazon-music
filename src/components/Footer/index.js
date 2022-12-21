import { Flex } from 'rebass'
import { useState } from 'react'
import styled from 'styled-components'
import Slider from '@material-ui/core/Slider'
import { useRecoilValue } from 'recoil'
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious'
import SkipNextIcon from '@material-ui/icons/SkipNext'
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline'
import PauseCircleOutlineIcon from '@material-ui/icons/PauseCircleOutline'

import { Text } from 'common_components'
import { useAudio } from 'components'
import { selectedSong } from 'recoil/atom'

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
`

const Footer = () => {
  const { song } = useAudio()
  const songInfo = useRecoilValue(selectedSong)

  const [value, setValue] = useState(0)
  song &&
    song.addEventListener('timeupdate', () => {
      setValue(parseInt((song.currentTime / song.duration) * 100))
    })

  return (
    <>
      {song && (
        <Box flexDirection="column">
          <Slider
            value={value}
            style={{ padding: 0, color: 'white', marginBottom: '10px' }}
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
            >
              <Text fontSize="18px">{songInfo?.name}</Text>
              <Text fontSize="14px" color="#ffffff99">
                {songInfo?.singer}
              </Text>
            </Flex>
            <Flex
              justifyContent="space-between"
              alignItems="center"
              marginLeft="100px"
            >
              <SkipPreviousIcon
                style={{
                  fontSize: '60px',
                  marginRight: '100px',
                  cursor: 'pointer',
                }}
              />
              {song?.paused ? (
                <PlayCircleOutlineIcon
                  style={{ fontSize: '60px', cursor: 'pointer' }}
                />
              ) : (
                <PauseCircleOutlineIcon
                  style={{ fontSize: '60px', cursor: 'pointer' }}
                />
              )}
              <SkipNextIcon
                style={{
                  fontSize: '60px',
                  marginLeft: '100px',
                  cursor: 'pointer',
                }}
              />
            </Flex>
          </Flex>
        </Box>
      )}
    </>
  )
}

export default Footer
