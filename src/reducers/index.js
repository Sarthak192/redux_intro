import {combineReducers} from 'redux';

const songsReducer = () => {
    return [
        {title: "No Scrubs", duration: "4:05"},
        {title: "Macarena", duration: "2:30"},
        {title: "All Star", duration: "3:15"},
        {title: "I Want it That Way", duration: "1:45"},
    ]
}

const selectedSongReducer = (selectedSong = null, action) => {
    if(action.type === "SELECT_SONG"){
        return action.payload
    }

    return selectedSong
}

export default combineReducers({
    //these are represented as a global state
    songs: songsReducer,
    selectedSong: selectedSongReducer
})