import React, { useState, useEffect } from 'react'
import axios from 'axios'
import HeaderCard from '../Header/HeaderCard'
import BodyCard from '../Body/BodyCard'
import FooterCard from '../Footer/FooterCard'
import MatchCard from '../Match/MatchCard'


export default function MainCard() {
    const [profiles, setProfile] = useState({})
    const [renderMatch, setRenderMatch] = useState(false)

    const URL = 'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/guilherme-beutler'

    const getProfiles = () => {
        axios
            .get(`${URL}/person`)
            .then((response) => {
                setProfile(response.data.profile)
            })
    }

    useEffect(() => {
        getProfiles()
    }, [])

    const onClickToMatch = () => {
        const body = {
            'id': profiles.id,
            'choice': true
        }
        axios
            .post(`${URL}/choose-person`, body)
            .then(() => {
                alert("Você deu um match!")
                getProfiles()
            })
            .catch(erro => {
                console.log(erro)
            })
    }

    const onClickPass = () => {
        const body = {
            'id': profiles.id,
            'choice': false
        }
        axios
            .post(`${URL}/choose-person`, body)
            .then(() => {
                alert("Ops")
                getProfiles()
            })
            .catch(erro => {
                console.log(erro)
            })
    }

    useEffect(() => {
        window.addEventListener('keydown', onKeypressed);
        return () => {
            window.removeEventListener('keydown', onKeypressed);
        }
        function onKeypressed(ev) {
            if (ev.code === 'ArrowRight') {
                onClickToMatch()
            } else if (ev.code === 'ArrowLeft') {
                onClickPass()
            }
        }
    });

    const onClickRender = () => {
        setRenderMatch(!renderMatch)
    }

    const renderBody = () => {
        if (renderMatch === false) {
            return (
                <div>
                    <HeaderCard onClickRender={onClickRender} />
                    {profiles ?
                        <BodyCard
                            photo={profiles.photo}
                            name={profiles.name}
                            age={profiles.age}
                            bio={profiles.bio}
                            
                        />
                        : <></>}
                    <FooterCard
                        profile={profiles}
                        onClickToMatch={onClickToMatch}
                        onClickPass={onClickPass}
                    />
                </div>
            )
        } else if (renderMatch === true) {
            return (
                <div>
                    <HeaderCard onClickRender={onClickRender} />
                    <MatchCard URL={URL} />
                </div>
            )
        }
    }

    return (
        renderBody()
    )
}