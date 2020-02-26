//Action Creator
export const selectSong = (song) => {
    return {
        //Actions
        type: "SELECT_SONG",
        payload: song
    }
}