import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function MainCard() {
    const [profile, setProfile] = useState({})
    const [renderMatch, setRenderMatch] = useState(false)

    const URL = 'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/guilherme-beutler-freire'

    const getProfileToChoose = () => {
        axios
            .get(`${URL}/person`)
            .then((response) => {
                setProfile(response.data.profile)
            })
    }

    useEffect (() => {
        getProfileToChoose()
    }, [])

    const onClickToMatch = () => {
        const body = {
            'id': profile.id,
            'choice': true
        }
        axios
            .post(`${URL}/chose-person`, body)
            .then(() => {
                alert("Você deu um match!")
                getProfileToChoose()
            })
            .catch(erro => {
                console.log(erro)
            })
    }

    const onClickPass = () => {
        const body = {
            'id': profile.id,
            'choice': false
        }
        axios
        .post(`${URL}/chose-person`, body)
        .then(() => {
            alert("Ops")
            getProfileToChoose()
        })
        .catch(erro => {
            console.log(erro)
        })
    }




}