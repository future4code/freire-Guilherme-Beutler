
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { BASE_URL } from '../../constants/urls';
import { useNavigate } from 'react-router-dom';
import { CircularProgress } from '@mui/material';
import BackToTop from '../../components/BackToTop/BackToTop';
import useForm from '../../hooks/useForm';
import useProtectedPage from '../../hooks/useProtectedPage';
import axios from 'axios';
import chat from '../../assets/img/chat.png';
import downred from '../../assets/img/downred.png';
import up from '../../assets/img/up.png';
import upgreen from '../../assets/img/upgreen.png';
import down from '../../assets/img/down.png';
import {
    CardFeed,
    MainContainer,
    Votos,
    Comment,
    CardDown,
    InputContainer,
    Button,
    CommentsContainer
} from './styled'
import Loading from '../../components/Loading/Loading';


export default function PostPage() {
    useProtectedPage()
    const navigate = useNavigate()
    const postId = useParams()
    const [post, setPost] = useState({});
    const [form, onChange, clean] = useForm({ body: '' });
    const [comments, setComments] = useState([]);
    const [vote, setVote] = useState({})
    const [loading, setLoading] = useState(false)

    const getPost = () => {
        axios
            .get(`${BASE_URL}/posts`,
                {
                    headers: {
                        Authorization: localStorage.getItem('token')
                    }
                })
            .then((response) => {
                const array = filterPost(response.data)
                setPost(array)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    useEffect(() => {
        getPost()
        getComments(postId.id)
    }, [])

    const filterPost = (posts) => {
        return posts.find((post) => {
            if (post.id === postId.id) {
                return true
            }
        })
    }

    const getComments = (id) => {
        axios
            .get(`${BASE_URL}/posts/${id}/comments`,
                {
                    headers: {
                        Authorization: localStorage.getItem('token')
                    }
                })
            .then((response) => {
                setComments(response.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    const CreateComments = (id) => {
        const token = localStorage.getItem('token');
        const body = {
            body: form.body
        };

        axios
            .post(`${BASE_URL}/posts/${id}/comments`, body,
                {
                    headers: {
                        Authorization: token
                    }
                })

            .then((res) => {
                console.log(res.data)
                setLoading()
                getComments(id);
                clean()
            })
            .catch((err) => {
                console.log('Erro tente novamente!');
            });
    };

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
                    getPost()
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
                    getPost()
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
                    getPost()
                })
                .catch((error) => {
                    alert('Erro, tente novamente')
                })
        }
    }

    return (
        <MainContainer>
            <CardFeed key={post.id}>
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
                    <Comment>
                        <img src={chat} />
                        <p>{post.commentCount}</p>
                    </Comment>
                </CardDown>
            </CardFeed>
            <InputContainer>
                <input
                    value={form.body}
                    onChange={onChange}
                    name='body'
                    placeholder='Adicionar comentario'
                />
            </InputContainer>

            <Button
                onClick={() => CreateComments(post.id)}
            >
                {loading ? <CircularProgress color={'inherit'} size={36} /> : <> Criar</>}
            </Button>

            <CommentsContainer>
                {comments.length > 0 ? comments.map((c) => {
                    return (
                        <CardFeed key={c.id}>
                            <p>{`Enviado por: ${c.username}`}</p>
                            <p>{c.body}</p>
                            <CardDown>
                                <Votos>
                                    <img src={up} />
                                    <p>{c.voteSum}</p>
                                    <img src={down} />
                                </Votos>
                            </CardDown>
                        </CardFeed>
                    )
                }) : <Loading />}
            </CommentsContainer>
            <BackToTop />
        </MainContainer>
    )
}