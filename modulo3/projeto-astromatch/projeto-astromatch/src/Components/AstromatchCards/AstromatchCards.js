import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TinderCard from 'react-tinder-card';
import styled from 'styled-components';

const Card = styled.div`
    position: relative;
    width: 600px;
    padding: 20px;
    max-width: 85vw;
    height: 50vh;
    border-radius: 20px;
    background-size: cover;
    background-position: center;
    box-shadow: 0px 18px 53px 0px rgba(0, 0, 0, 0,3);
`

const ContainerCard = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 5vh;
`

function AstromatchCards() {

    const [profiles, setProfile] = useState({})
    const [renderMatch, setRenderMatch] = useState(false)

    const URL = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/guilherme-beutler"

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

    const onClickRender = () => {
        setRenderMatch(!renderMatch)
    }



    return (
        <div>
            <ContainerCard>
                <TinderCard
                    key={profiles.id}
                    preventSwipe={['up', 'down']}
                >

                    <Card
                        style={{ backgroundImage: `url(${profiles.photo})` }}
                    >
                        <h3>{profiles.name}, {profiles.age}</h3>
                        <p>{profiles.bio}</p>
                    </Card>
                </TinderCard>
            </ContainerCard>
        </div>
    )
}

export default AstromatchCards;