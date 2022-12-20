import { Flex } from 'rebass'

import { Navigation } from 'components'
import Content from 'containers/Content'

const App = () => {
  return (
    <Flex flexDirection="column">
      <Navigation />
      <Content />
    </Flex>
  )
}

export default App
