import { Flex } from 'rebass'
import InputBase from '@material-ui/core/InputBase'
import { makeStyles } from '@material-ui/core/styles'
import SearchIcon from '@material-ui/icons/Search'

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

const Searchbar = () => {
  const classes = useStyles()

  return (
    <Flex className={classes.search} marginLeft="350px">
      <InputBase
        placeholder="Search…"
        classes={{
          input: classes.inputInput,
        }}
        inputProps={{ 'aria-label': 'search' }}
      />
      <Flex className={classes.searchIcon} marginTop="25px" marginRight="30px">
        <SearchIcon />
      </Flex>
    </Flex>
  )
}

export default Searchbar
