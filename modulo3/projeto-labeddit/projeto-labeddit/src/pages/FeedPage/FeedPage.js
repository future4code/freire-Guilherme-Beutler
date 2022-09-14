import React, { useState, useEffect } from 'react';
import { BASE_URL } from '../../constants/urls'
import { useNavigate } from 'react-router-dom';
import { Pagination } from '@mui/material'
import { goToPostPage } from '../../routes/Coordinator';
import Loading from '../../components/Loading/Loading';
import BackToTop from '../../components/BackToTop/BackToTop';
import useProtectedPage from '../../hooks/useProtectedPage'
import axios from 'axios';
import downred from '../../assets/img/downred.png'
import up from '../../assets/img/up.png'
import upgreen from '../../assets/img/upgreen.png'
import down from '../../assets/img/down.png'
import chat from '../../assets/img/chat.png'
import send from '../../assets/img/send.png'
import FeedForm from './FeedForm';
import {
    PostContainer,
    FeedContainer,
    CardFeed,
    MainContainer,
    Votos,
    Comment,
    CardDown,
    Send,
} from './styled'


export default function FeedPage() {
    useProtectedPage()
    const navigate = useNavigate()
    const [page, setPage] = useState(1);
    const [att, setAtt] = useState({})

    const getAtt = () => {
        axios
            .get(`${BASE_URL}/posts?page=${page}`,
                {
                    headers: {
                        Authorization: localStorage.getItem('token')
                    }
                })
            .then((response) => {
                setAtt(response.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    useEffect(() => {
        getAtt()
    }, [])

    const handleChange = (ev, value) => {
        setPage(value)
        getAtt()

    }

    const onClickPost = (id) => {
        goToPostPage(navigate, id)
    }

    const buttonLike = (vote, postId) => {
        if (vote === 1) {
            likes(postId)
        } else {
            likes(postId, 1)
        }
    }

    const buttonDislike = (vote, postId) => {
        if (vote === -1) {
            likes(postId)
        } else {
            likes(postId, -1)
        }
    }

    const likes = (postId, direction) => {
        const token = localStorage.getItem('token')
        const body = {
            direction: direction
        }

        if (direction === 1) {
            axios
                .post(`${BASE_URL}/posts/${postId}/votes`, body,
                    {
                        headers: {
                            Authorization: token
                        }
                    })
                .then((response) => {
                    getAtt()
                })
                .catch((error) => {
                    alert('Erro, tente novamente')
                })
        } else if (direction === -1) {
            axios
                .put(`${BASE_URL}/posts/${postId}/votes`, body,
                    {
                        headers: {
                            Authorization: token
                        }
                    })
                .then((response) => {
                    getAtt()
                })
                .catch((error) => {
                    alert('Erro, tente novamente')
                })
        } else {
            axios
                .delete(`${BASE_URL}/posts/${postId}/votes`,
                    {
                        headers: {
                            Authorization: token
                        }
                    })
                .then((response) => {
                    getAtt()
                })
                .catch((error) => {
                    alert('Erro, tente novamente')
                })
        }
    }


    const feedCard = Object.values(att).map((post) => {
        return <CardFeed
            key={post.id}
        >
            <p>{`Enviado por: ${post.username}`}</p>
            <h3>{post.body}</h3>
            <CardDown>
                <Votos>
                    {
                        post.userVote === 1 ?
                            <img src={upgreen} onClick={() => buttonLike(post.userVote, post.id)} /> :
                            <img src={up} onClick={() => buttonLike(post.userVote, post.id)} />
                    }

                    <p>{post.voteSum}</p>

                    {
                        post.userVote === -1 ?
                            <img src={downred} onClick={() => buttonDislike(post.userVote, post.id)} /> :
                            <img src={down} onClick={() => buttonDislike(post.userVote, post.id)} />
                    }
                </Votos>
                <Comment
                    onClick={() => onClickPost(post.id)}

                >
                    <img src={chat} />
                    <p>{post.commentCount}</p>
                </Comment>
                <Send>
                    <img src={send} />
                </Send>
            </CardDown>
        </CardFeed>
    })
    return (
        <MainContainer>
            <PostContainer>
                <FeedForm />
            </PostContainer>
            <FeedContainer>
                {feedCard.length > 0 ? feedCard : <Loading />}
            </FeedContainer>
            <Pagination
                count={10}
                page={page}
                onChange={handleChange}
            />
            <BackToTop />
        </MainContainer>
    )
}