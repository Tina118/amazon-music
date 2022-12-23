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
  
  @media (max-width: 1240px) {
    width: 80px;
    height: 80px;
  }

  @media (max-width: 1024px) {
    width: 75px;
    height: 75px;
  }

  @media (max-width: 960px) {
    width: 60px;
    height: 60px;
  }

  @media (max-width: 768px) {
    width: 50px;
    height: 50px;
  }

  @media (max-width: 767px) {
    width: 100px;
    height: 100px;
  }
`

const Pause = styled(PauseIcon)`
  position: absolute;
  top: 18%;
  left: 18%;
  font-size: 65px !important;
  color: white !important;

  @media (max-width: 1240px) {
    top: 10%;
    left: 10%;
    font-size: 65px !important;
  }

  @media (max-width: 1024px) {
    top: 10%;
    left: 10%;
    font-size: 60px !important;
  }

  @media (max-width: 960px) {
    top: 10%;
    left: 10%;
    font-size: 50px !important;
  }

  @media (max-width: 768px) {
    top: 10%;
    left: 10%;
    font-size: 45px !important;
  }

  @media (max-width: 767px) {
    top: 18%;
    left: 18%;
    font-size: 65px !important;
  }
`

const Icon = styled(Flex)`
  position: absolute;
  top: 25%;
  left: 25%;
  cursor: pointer;

  @media (max-width: 960px) {
    top: 20%;
    left: 20%;
  }

  @media (max-width: 767px) {
    top: 25%;
    left: 25%;
  }
`

const PauseButton = () => (
  <Icon>
    <Circle />
    <Pause />
  </Icon>
)

export default PauseButton
