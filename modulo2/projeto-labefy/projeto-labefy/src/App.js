import React from 'react';
import AddTrack from './Components/AddTrack';
import CreatePlaylist from './Components/CreatePlaylist';
import Playlist from './Components/Playlist';




class App extends React.Component {

  state = {
    render: 'create-playlist',
  };

  renderCreatePlaylist = () => {
    this.setState({ render: 'create-playlist' })
  };

  renderPlaylist = () => {
    this.setState({ render: 'playlist' })
  };

  renderMusicPlaylist = () => {
    this.setState({ render: 'music-playlist' })
  };

  render() {
    const render = () => {
      switch (this.state.render) {
        case 'create-playlist':
          return <CreatePlaylist />
        case 'playlist':
          return <Playlist />
        case 'music-playlist':
          return <AddTrack />
      }
    }

    return (
      <div>
        <div>
          <button onClick={this.renderCreatePlaylist}>Create Playlist</button>
          <button onClick={this.renderPlaylist}>Playlist</button>
          <button onClick={this.renderMusicPlaylist}>Add Music</button>
        </div>
        {render()}
      </div>
    )
  }
}

export default App;
