import HomeIcon from '@material-ui/icons/Home'
import HeadsetIcon from '@material-ui/icons/Headset'
import HearingIcon from '@material-ui/icons/Hearing'
import AccountCircle from '@material-ui/icons/AccountCircle'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'

import image from 'assets/logo.png'

import Searchbar from './Searchbar'
import Navbar from './Navbar'
import UnorderedList from './UnorderedList'
import ListItem from './ListItem'
import Image from './Image'
import TextMessage from './TextMessage'

const Navigation = () => {
  return (
    <Navbar>
      <UnorderedList>
        <ListItem>
          <Image src={image} />
        </ListItem>
        <ListItem>
          <HomeIcon
            fontSize="large"
            style={{ color: '#25d9da', marginRight: '12px' }}
          />
          <TextMessage fontWeight="bold" lineHeight="24px" color="#25d9da">
            HOME
          </TextMessage>
        </ListItem>
        <ListItem>
          <HearingIcon fontSize="large" style={{ marginRight: '12px' }} />
          <TextMessage fontWeight="bold" lineHeight="24px">
            PODCASTS
          </TextMessage>
        </ListItem>
        <ListItem>
          <HeadsetIcon fontSize="large" style={{ marginRight: '12px' }} />
          <TextMessage fontWeight="bold" lineHeight="24px">
            LIBRARY
          </TextMessage>
        </ListItem>
        <ListItem>
          <Searchbar />
        </ListItem>
        <ListItem>
          <AccountCircle style={{ fontSize: '45px' }} />
        </ListItem>
      </UnorderedList>
    </Navbar>
  )
}

export default Navigation
