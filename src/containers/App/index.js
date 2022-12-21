import { Flex } from 'rebass'

import { Navigation , Footer } from 'components'
import Content from 'containers/Content'
import { AudioProvider } from 'components'

const App = () => {
  return (
    <Flex flexDirection="column">
      <AudioProvider>
        <Navigation />
        <Content />
        <Footer />
      </AudioProvider>
    </Flex>
  )
}

export default App
