import axios from 'axios';
import React from 'react';
import styled from 'styled-components';

const Save = styled.button`
  display: inline-block;
  justify-content: center;
  align-items: center;
  margin: 10px 10px;
  color: #fff;
  background-color: #202231;
  text-decoration: none;
  padding: 10px 10px;
  border: 2px solid rgba(10, 180, 180, 1);
  border-radius: 10px;
  cursor: pointer;
  &:hover {
    animation: pulsate 1s ease-in-out;
  }
  @keyframes pulsate {
    0%{
      box-shadow: 0 0 25px #5DDCFF, 0 0 50px #4E00C2;
    }
  }
`
const AddPlaylist = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;

`

class CreatePlaylist extends React.Component {

    state = {
        playlists: [],
        inputPlaylistName: '',
        attPage: true
    }

    createPlaylist = () => {
        const body = {
            name: this.state.inputPlaylistName
        }
        axios
            .post('https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists',
                body, {
                headers: {
                    Authorization: 'guilherme-beutler-freire'
                }
            })
            .then((resposta) => {
                alert('Playlist create successfully!')
                this.setState({ inputPlaylistName: '' });
            })
            .catch((error) => {
                alert('Could not create playlist!');
                console.log(error)
            })
    }

    onChangeInputPlaylist = (event) => {
        this.setState({ inputPlaylistName: event.target.value });
    };


    render() {
        return (
            <AddPlaylist>
                <h3>Create Playlist</h3>
                <label>Name Playlist</label>
                <input
                    placeholder=''
                    value={this.state.inputPlaylistName}
                    onChange={this.onChangeInputPlaylist}
                />
                <Save onClick={this.createPlaylist}>Save</Save>
            </AddPlaylist>
        );
    }
}

export default CreatePlaylist;