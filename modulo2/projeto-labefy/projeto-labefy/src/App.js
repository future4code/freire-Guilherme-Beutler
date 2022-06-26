import React from 'react';
import AddTrack from './Components/AddTrack';
import CreatePlaylist from './Components/CreatePlaylist';
import Playlist from './Components/Playlist';
import GlobalStyle from './global'
import styled from 'styled-components';

const ConteinerPrincipal = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  gap: 50px;

`

const Sections = styled.div`
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 20px 20px;
  height: 95vh;
`

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
          return
      }
    }

    return (
      <ConteinerPrincipal>
        <Sections>
          <div>
            <CreatePlaylist />
          </div>
        </Sections>
        <Sections>
          <div>
            <Playlist />
          </div>
        </Sections>
        <Sections>
          <div>
            <AddTrack />
          </div>
        </Sections>
        <GlobalStyle />
      </ConteinerPrincipal>
    )
  }
}

export default App;
