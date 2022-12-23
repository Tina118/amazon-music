import styled from 'styled-components'

import gif from 'assets/music.gif'

const Gif = styled.img`
  position: absolute;
  top: 80%;
  left: 25%;
  width: 90px;
  height: 30px;

  @media (max-width: 1240px) {
    width: 80px;
    height: 25px;
    left: 20%;
  }

  @media (max-width: 1024px) {
    width: 80px;
    height: 25px;
    left: 20%;
  }

  @media (max-width: 960px) {
    width: 55px;
    height: 18px;
    left: 18%;
  }

  @media (max-width: 767px) {
    left: 25%;
    width: 90px;
    height: 30px;
  }
`

const MusicGif = () => <Gif src={gif} className="music" />

export default MusicGif
