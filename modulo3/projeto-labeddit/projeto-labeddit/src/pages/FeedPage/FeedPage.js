import React, { useState, useEffect } from "react";
import useProtectedPage from '../../hooks/useProtectedPage'
import useRequestData from "../../hooks/useRequestData";
import axios from "axios";
import downred from '../../assets/img/downred.png'
import up from '../../assets/img/up.png'
import upgreen from '../../assets/img/upgreen.png'
import down from '../../assets/img/down.png'
import chat from '../../assets/img/chat.png'
import send from '../../assets/img/send.png'
import { BASE_URL } from '../../constants/urls'
import { useNavigate } from "react-router-dom";
import FeedForm from "./FeedForm";
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
import { goToFeedPage, goToPostPage } from "../../routes/Coordinator";
import Loading from "../../components/Loading/Loading";
import { Pagination } from "antd";


export default function FeedPage() {
    useProtectedPage()
    const navigate = useNavigate()


    const [total, setTotal] = useState('')
    const [page, setPage] = useState(0)
    const [postPerPage, setPostPerPage] = useState(10)
    const [vote, setVote] = useState({})

    const feed = useRequestData([], `${BASE_URL}/posts`)

    const indexOfLastPage = page + postPerPage
    const indexFirstPage = indexOfLastPage - postPerPage
    const currentPosts = feed.slice(indexFirstPage, indexOfLastPage)



    const onShowSizeChange = (current, pageSize) => {
        setPostPerPage(pageSize)
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
                    alert('ok')
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
                    alert('ok')
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
                    alert('ok')
                })
                .catch((error) => {
                    alert('Erro, tente novamente')
                })
        }
    }


    const feedCard = currentPosts.map((post) => {
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
                pageSize={postPerPage}
                total={total}
                current={page}
                onChange={(value) => setPage(value)}
                showSizeChanger
                showQuickJumper
                onShowSizeChange={onShowSizeChange}
            />
        </MainContainer>
    )
}