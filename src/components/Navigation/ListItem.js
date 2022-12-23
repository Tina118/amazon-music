import styled from 'styled-components'

const ListItem = styled.li`
  display: flex;
  text-decoration: none;
  list-style-type: none;
  cursor: pointer;
  justify-items: start;
  align-content: flex-start;
  align-items: center;
  height: 100%;
  width: 100%;
  justify-content: space-around;
  max-width: 1600px;
  margin-right: 30px;

  @media (max-width: 1280px) {
    width:150px;
    &:nth-last-child(2),&:nth-last-child(3) {
      display: none;
    }
  
    &:last-child {
      display: flex;
      justify-content: flex-end;
      width:100%;
    }
  }

  @media (max-width: 960px) {
    &:not(:first-child) {
      display: none;
    }

    &:first-child {
      justify-content: flex-start;
    }

    &:last-child {
      display: flex;
      justify-content: flex-end;
    }
  }
`

export default ListItem
