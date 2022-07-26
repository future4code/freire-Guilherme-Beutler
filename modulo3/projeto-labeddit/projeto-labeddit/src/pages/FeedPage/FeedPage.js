import React, { useState } from "react";
import useProtectedPage from '../../hooks/useProtectedPage'
import useRequestData from "../../hooks/useRequestData";
import Pagination from "../../components/Header/Pagination/Pagination";
import like from '../../assets/img/like.png'
import like2 from '../../assets/img/like2.png'
import dislike from '../../assets/img/dislike.png'
import dislike2 from '../../assets/img/dislike2.png'
import chat from '../../assets/img/chat.png'
import send from '../../assets/img/send.png'
import { BASE_URL } from '../../constants/urls'
import FeedForm from "./FeedForm";
import {
    PostContainer,
    ButtonContainer,
    FeedContainer,
    CardFeed,
    MainContainer,
    Votos,
    Comment,
    CardDown,
    Send,
    InputContainer
} from './styled'

export default function FeedPage() {
    useProtectedPage()

    const feed = useRequestData([], `${BASE_URL}/posts/`)
    console.log(feed)

    const feedCard = feed.map((post) => {
        return <CardFeed key={post.id}>
            <p>{`Enviado por: ${post.username}`}</p>
            <h3>{post.body}</h3>
            <CardDown>
                <Votos>
                    <img src={like} />
                    <p>{post.voteSum}</p>
                    <img src={dislike} />
                </Votos>
                <Comment>
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
                {feedCard}
            </FeedContainer>

        </MainContainer>
    )
}