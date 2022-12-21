import { Flex } from 'rebass'
import styled from 'styled-components'

import PlayArrowIcon from '@material-ui/icons/PlayArrow'

const Circle = styled(Flex)`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: white;
  opacity: 0.4;
  position: relative;
`

const Play = styled(PlayArrowIcon)`
  position: absolute;
  top: 18%;
  left: 18%;
  font-size: 65px !important;
  color: white !important;
`

const Icon = styled(Flex)`
  position: absolute;
  top: 25%;
  left: 25%;
  cursor: pointer;
`

const PlayButton = () => (
  <Icon>
    <Circle className="circle" />
    <Play />
  </Icon>
)

export default PlayButton
