import React from 'react';
import axios from 'axios';
import styled from 'styled-components'



class AddTrack extends React.Component {

    state = {
        playlists: [],
        playlistDetail: [],
        inputNameTrack: '',
        inputArtistTrack: '',
        inputUrlTrack: '',
        render: true,
        playlistId: ''
    }

    componentDidMount = () => {
        this.getAllPlaylists()
    }

    getAllPlaylists = () => {
        axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists', {
            headers: {
                Authorization: 'guilherme-beutler-freire'
            }
        })
            .then(response => {
                this.setState({ playlists: response.data.result.list })
            })
            .catch(error => {
                console.log(error)
            })
    }

    addTrackPlaylist = (playlistId) => {
        const body = {
            name: this.state.inputNameTrack,
            artist: this.state.inputArtistTrack,
            url: this.state.inputUrlTrack
        }

        axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlistId}/tracks`,
        body, 
        {
            headers: {
                Authorization: 'guilherme-beutler-freire'
            }
        })
            .then(response => {
                alert('Music add successfuly!')
                this.setState({ inputNameTrack: '', inputArtistTrack: '', inputUrlTrack: '' })
            })
            .catch(error => {
                console.log(error)
                alert('Unable to add song!')
                this.setState({ inputNameTrack: '', inputArtistTrack: '', inputUrlTrack: '' })
            })
    }

    onChangeInputName = (event) => {
        this.setState({ inputNameTrack: event.target.value })
    }

    onChangeInputArtist = (event) => {
        this.setState({ inputArtistTrack: event.target.value })
    }

    onChangeInputUrl = (event) => {
        this.setState({ inputUrlTrack: event.target.value })
    }

    showRender = (playlistId) => {
        this.setState({ render: !this.state.render })
        this.setState({ playlistId: playlistId })
    }

    render() {

        const render = () => {
            if (this.state.render) {
                return this.state.playlists.map((playlist) => {
                    return (
                        <div key={playlist.id}>
                            <p onClick={() => this.showRender(playlist.id)}>{playlist.name}</p>
                        </div>
                    )
                })
            } else {
                return (
                    <div>
                        <h3>Add song on playlist</h3>
                        <div>
                            <label>Name:</label>
                            <input
                                placeholder=''
                                value={this.state.inputNameTrack}
                                onChange={this.onChangeInputName} />
                        </div>
                        <div>
                            <label>Artist:</label>
                            <input
                                placeholder=''
                                value={this.state.inputArtistTrack}
                                onChange={this.onChangeInputArtist} />
                        </div>
                        <div>
                            <label>URL:</label>
                            <input
                                placeholder=''
                                value={this.state.inputUrlTrack}
                                onChange={this.onChangeInputUrl} />
                        </div>
                        <button onClick={() => this.addTrackPlaylist(this.state.playlistId)}>Add Song</button>
                        <button onClick={this.showRender}>Back</button>
                    </div>
                )
            }
        }

        return (
            <div>
                <h3>Selec the playlist you want to add the song to</h3>
                <div>
                    {render()}
                </div>
            </div>
        )
    }
}

export default AddTrack;