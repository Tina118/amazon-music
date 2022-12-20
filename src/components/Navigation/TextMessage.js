import styled from 'styled-components'
import { Text } from 'common_components'

const TextMessage = styled(Text)`
  @media (min-width: 1000px) {
    display: none;
    color:green;
  }
`

export default TextMessage
