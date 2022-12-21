import styled from 'styled-components'

import gif from 'assets/music.gif'

const Gif = styled.img`
  position: absolute;
  top: 30%;
  left: 25%;
  width:100px;
  height:50px;

`

const MusicGif = () => <Gif src={gif} className="music"/>

export default MusicGif
