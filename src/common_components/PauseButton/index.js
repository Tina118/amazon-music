import { Flex } from 'rebass'
import styled from 'styled-components'

import PauseIcon from '@material-ui/icons/Pause'

const Circle = styled(Flex)`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: white;
  opacity: 0.4;
  position: relative;
`

const Pause = styled(PauseIcon)`
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

const PauseButton = () => (
  <Icon>
    <Circle />
    <Pause />
  </Icon>
)

export default PauseButton
