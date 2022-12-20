import { createContext, useContext ,useState} from 'react'

export const AudioContext = createContext()

const { Provider } = AudioContext

export const useAudio = () => {
  const context = useContext(AudioContext)

  return context
}

//Then we create the provider
export const AudioProvider = ({ children }) => {
  const [song, _setSong] = useState()

  const setSong = (url) => {
    if(song){
        song.pause()
    }
    const newSong = new Audio(url)
    newSong.play()
    _setSong(newSong)
  }
  const pauseSong = () => song.pause()

  return <Provider value={{ setSong, pauseSong }}>{children}</Provider>
}
