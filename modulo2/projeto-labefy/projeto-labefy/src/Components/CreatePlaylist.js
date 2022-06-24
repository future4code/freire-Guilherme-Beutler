import axios from 'axios';
import React from 'react';


class CreatePlaylist extends React.Component {

    state = {
        playlists: [],
        inputPlaylistName: ''
    }

    createPlaylist = () => {
        const body = {
            name: this.state.inputPlaylistName
        }
        axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists',
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
            <div>
                <h3>Create Playlist</h3>
                <label>Name Playlist: </label>
                <input
                    placeholder=''
                    value={this.state.inputPlaylistName}
                    onChange={this.onChangeInputPlaylist}
                />
                <button onClick={this.createPlaylist}>Save</button>
            </div>
        );
    }
}

export default CreatePlaylist;