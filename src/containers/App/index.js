import { Flex } from 'rebass'

import { Navigation } from 'components'
import Content from 'containers/Content'
import {AudioProvider} from 'components';

const App = () => {
  return (
    <Flex flexDirection="column">
      <AudioProvider>
      <Navigation />
      <Content />
      </AudioProvider>
    </Flex>
  )
}

export default App
