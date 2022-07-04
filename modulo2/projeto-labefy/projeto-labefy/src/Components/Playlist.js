import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import img from '../img/delete.svg'


const ButtonDelete = styled.button`
    height: 28px;
    width: 28px;
    border: none;
    background: url(${img});

`
const CardPlayList = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #fff;
    background-color: #202231;
    text-decoration: none;
    padding: 10px 10px;
    border: 2px solid rgba(10, 180, 180, 1);
    border-radius: 10px;
    margin: 20px 20px;
    height: 10vh;
    width: 30vh;
    cursor: pointer;
`

const ContainerCards = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    margin-top: 20px;
    margin-bottom: 20px;
`

const Player = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    margin-top: 60px;

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
        axios
            .get('https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists', {
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
            axios
                .delete(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlistId}`,
                    {
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
        axios
            .get(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlistId}/tracks`,
                {
                    headers: {
                        Authorization: 'guilherme-beutler-freire'
                    }
                })
            .then(response => {
                this.setState({ playlistDetail: response.data.result.tracks })
                console.log(this.playlistDetail)
            })
            .catch(error => {
                console.log(error.data)
            })
    };

    onClickAddMusic = () => {
        this.setState({ addMusic: !this.setState.addMusic })
    }

    render() {

        return (
            <div>
                <h2>Playlists</h2>
                <ContainerCards>{this.state.playlists.map((playlist) => {
                    return (
                        <div key={playlist.id}>
                            {playlist.name !== ''
                                ? <CardPlayList onClick={() => this.renderPlaylist(playlist.id)}>
                                    <p>{playlist.name}</p>
                                    <ButtonDelete
                                        onClick={() => this.deletePlaylist(playlist.id)}
                                    ></ButtonDelete>
                                </CardPlayList>
                                : <div>There are no playlists registered!</div>}
                        </div>
                    )
                })}
                </ContainerCards>
                {this.state.playlistDetail && (<h3>Music playlist</h3>)}
                <div>
                    <Player>{this.state.playlistDetail.map((tracks) => {
                        const link = `${tracks.url.substring(32)}`
                        return (
                            <div key={tracks.id}>
                                <div>
                                    <p>{tracks.artist} - {tracks.name}</p>
                                    <br />
                                    <div>
                                        <iframe
                                            title={tracks.id}
                                            width="290px"
                                            height="150px"
                                            src={`https://www.youtube.com/embed/${link}`}
                                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
                                        </iframe>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                    </Player>
                </div>
            </div>
        )
    }
}

export default Playlist;