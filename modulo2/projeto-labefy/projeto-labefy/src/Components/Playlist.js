import React from 'react';
import axios from 'axios';
import styled from 'styled-components'

const CardUser = styled.div`
`

class Playlist extends React.Component {

    state = {
        playlists: [],
        playlistDetail: [],
        addMusic: false,
    };

    componentDidMount = () => {
        this.getAllPlaylist();
    };

    getAllPlaylist = () => {
        axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists', {
            headers: {
                Authorization: 'guilherme-beutler-freire'
            }
        })
            .then(response => {
                this.setState({ playlists: response.data.result.list })
            })
            .catch(error => {
                console.log(error.data)
            })
    };

    deletePlaylist = (playlistId) => {

        if (window.confirm('Do you want to delete this playlist?')) {
            axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlistId}`, {
                headers: {
                    Authorization: 'guilherme-beutler-freire'
                }
            })
                .then((response) => {
                    this.getAllPlaylist()
                })
                .catch((error) => {
                    console.log(error)
                })
        };
    };

    renderPlaylist = (playlistId) => {
        axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlistId}/tracks`, {
            headers: {
                Authorization: 'guilherme-beutler-freire'
            }
        })
            .then(response => {
                this.setState({ playlistDetail: response.data.result.tracks })
            })
            .catch(err => {
                console.log(err)
            })
    };

    onClickAddMusic = () => {
        this.setState({ addMusic: !this.setState.addMusic })
    }

    render() {

        return (
            <div>
                <h2>Playlists: {this.state.playlists.length}</h2>
                <div>{this.state.playlists.map((playlist) => {
                    return (
                        <div key={playlist.id}>
                            {playlist.name !== ''
                                ? <div>
                                    <p onClick={() => this.renderPlaylist}>{playlist.name}</p>
                                    <button onClick={() => this.deletePlaylist(playlist.id)}>x</button>
                                </div>
                                : <div>There are no playlists registered!</div>}
                        </div>
                    )
                })}
                </div>
                {this.state.playlistDetail && (<h3>Music playlist: {this.state.playlistDetail.length}</h3>)}
                <div>
                    {this.state.playlistDetail.map((tracks) => {
                        return (
                            <div key={tracks.id}>
                                <p>{tracks.artist}</p>
                                <br /> {tracks.name}
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default Playlist;