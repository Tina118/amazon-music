import { createContext, useContext, useState } from 'react'

export const AudioContext = createContext()

const { Provider } = AudioContext

export const useAudio = () => {
  const context = useContext(AudioContext)

  return context
}

//Then we create the provider
export const AudioProvider = ({ children }) => {
  const [song, _setSong] = useState()
  const [isPlaying, setIsPlaying] = useState(false)

  const setSong = ( url ) => {
    if (song) {
      song.pause()
      setIsPlaying(false)
    }
    const newSong = new Audio(url)
    newSong.play()
    _setSong(newSong)
    setIsPlaying(true)
  }
  const pauseSong = () => {
    song.pause()
    setIsPlaying(false)
  }

  return (
    <Provider
      value={{
        setSong,
        pauseSong,
        isPlaying,
        setIsPlaying,
        song,
      }}
    >
      {children}
    </Provider>
  )
}
