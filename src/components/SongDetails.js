import React, {Component} from 'react';
import {connect} from 'react-redux';

class SongDetails extends Component{
    render(){
        if(!this.props.selectedSong){
            return <div>Select a song</div>
        }

        return <div>
            <h3>Details For:</h3>
            Title : {this.props.selectedSong.title}
            <br/>
            Duration : {this.props.selectedSong.duration}
            </div>
    }
}


const mapStateToProps = (state) => {
    return {selectedSong: state.selectedSong}
}

export default connect(mapStateToProps)(SongDetails);