import { Flex } from 'rebass'
import styled from 'styled-components'
import HomeIcon from '@material-ui/icons/Home'
import HeadsetIcon from '@material-ui/icons/Headset'
import HearingIcon from '@material-ui/icons/Hearing'
import Typography from '@material-ui/core/Typography'
import InputBase from '@material-ui/core/InputBase'
import { makeStyles } from '@material-ui/core/styles'
import SearchIcon from '@material-ui/icons/Search'
import AccountCircle from '@material-ui/icons/AccountCircle'

import image from 'assets/logo.png'

const useStyles = makeStyles(() => ({
  search: {
    position: 'relative',
    display: 'flex',
    flexshrink: 1,
    height: '100%',
    width: '100%',
    cursor: 'initial',
    marginInlineEnd: 0,
    
  },
  searchIcon: {
    display: 'block',
    position: 'absolute',
    insetInlineEnd: 0,
    height: '20px',
    top: 0,
    bottom: 0,
    border: 'none',
    outline: 'none',
    background: 'transparent',
    backgroundColor: '#fff',
    borderRadius: '50px',
    cursor: 'pointer',
    color: '#b4b4b4',
  },

  inputInput: {
    cursor: 'pointer',
    width: '200px',
    height: '40px',
    display: 'block',
    position: 'relative',
    top: 0,
    bottom: 0,
    margin: 'auto',
    paddingTop: '0px',
    paddingInlineEnd: '60px',
    paddingBottom: 0,
    paddingInlineStart: '24px',
    borderRadius: '50px',
    border: 'none',
    backgroundColor: '#fff',
    transition: 'all 100ms ease-in-out',
    marginInlineEnd: 0,
    fontSize: '14px',
    outline: 'none',
  },
}))

const Navbar = styled.nav`
    backdrop-filter: blur(30px);
    background-color: #0a0b0b;
    color: #fff;
    width: 100%;
    height: 72px;
    display:flex;
    align-items: center;
    justify-content: center;
    z-index: 5;
    position: fixed;
    top: 0;
    border-bottom: 1px solid rgba(255,255,255,0.15);
}
`

const UnorderedList = styled.ul`
  display: flex;
  cursor: pointer;
  justify-items: start;
  align-content: flex-start;
  width: 100%;
  height: 100%;
  margin-inline-start: auto;
  margin-inline-end: auto;
  padding-inline-start: 24px;
  max-width: 1600px;
`

const ListItem = styled.li`
  display: flex;
  text-decoration: none;
  list-style-type: none;
  cursor: pointer;
  justify-items: start;
  align-content: flex-start;
  align-items: center;
  height: 100%;
  max-width: 1600px;
  margin-right: 50px;
`

const Image = styled.img`
  height: 40px;
  width: 140px;
  margin-right: 14px;
`

const Navigation = () => {
  const classes = useStyles()

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
          <Typography
            style={{ fontWeight: 'bold', lineHeight: '24px', color: '#25d9da' }}
          >
            HOME
          </Typography>
        </ListItem>
        <ListItem>
          <HearingIcon fontSize="large" style={{ marginRight: '12px' }} />
          <Typography style={{ fontWeight: 'bold', lineHeight: '24px' }}>
            PODCASTS
          </Typography>
        </ListItem>
        <ListItem>
          <HeadsetIcon fontSize="large" style={{ marginRight: '12px' }} />
          <Typography style={{ fontWeight: 'bold', lineHeight: '24px' }}>
            LIBRARY
          </Typography>
        </ListItem>
        <ListItem>
          <Flex className={classes.search} marginLeft= '330px'>
            <InputBase
              placeholder="Search…"
              classes={{
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
            <Flex
              className={classes.searchIcon}
              marginTop="25px"
              marginRight="20px"
            >
              <SearchIcon />
            </Flex>
          </Flex>
        </ListItem>
        <ListItem>
          <AccountCircle style={{ marginLeft: '-30px', fontSize: '45px' }} />
        </ListItem>
      </UnorderedList>
    </Navbar>
  )
}

export default Navigation
