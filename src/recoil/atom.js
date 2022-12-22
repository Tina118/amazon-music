import { atom } from 'recoil';

//set selected song
export const selectedSong = atom({
    key:'selected_song',
    default:{}

})

export const selectedPlaylist = atom({
    key:'selected_playlist',
    default:{}
})