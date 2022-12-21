import styled from 'styled-components'

import gif from 'assets/music.gif'

const Gif = styled.img`
  position: absolute;
  top: 80%;
  left: 25%;
  width:90px;
  height:30px;

`

const MusicGif = () => <Gif src={gif} className="music"/>

export default MusicGif
