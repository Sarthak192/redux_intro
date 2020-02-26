import React from 'react';
import SongsList from './SongsLists';
import SongDetails from './SongDetails';

function App() {
  return (
    <div className="ui container grid">
      <div className="ui row">
        <div className="column eight wide">
          <SongsList />
        </div>
        <div className="column eight wide">
          <SongDetails />
        </div>
      </div>
    </div>
  );
}

export default App;
