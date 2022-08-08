import React, { useState, useEffect } from 'react'
import axios from 'axios'



const getMatches = async (URL) => {
    const response = await
    axios.get(`${URL}/matches`)
    return response.data.matches;
}

export default function MatchCard(props) {
    const [match, setMatch] = useState([])

    useEffect(() => {
        getMatches(props.URL)
            .then(match => {
                setMatch(match)
            })

    }, [props.URL])

    const clearMatches = () => {
        const body = {
            'id': '71gMbZs2txS9LDvGK5Ew'
        }
        if (window.confirm('Você deseja limpar seus matches?')) {
            axios
                .put(`${props.URL}/clear`, body)
                .then(() => {
                    setMatch([])
                })
                .catch((error) => {
                    console.log(error)
                })
        }
    }

    return (
        <div>
            <div>
                <p><strong>Matches:</strong></p>
                {
                    match.length === 0 ? <div>Você não possui matches!</div> :
                    match.map((matches) => {
                        return (
                            <div key={matches.id}>
                                <img src={matches.photo}/>
                                <span><strong>{matches.name}, </strong>{matches.age} anos</span>
                            </div>
                        )
                    })
                
                }
            </div>
            <button onClick={clearMatches}>Limpar</button>
        </div>
    )
}