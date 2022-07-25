import React from "react";
import useProtectedPage from '../../hooks/useProtectedPage'
import useRequestData from "../../hooks/useRequestData";
import { BASE_URL } from '../../constants/urls'
import { PostContainer, ButtonContainer, FeedContainer, CardFeed, MainContainer } from './styled'

export default function FeedPage() {
    useProtectedPage()

    const feed = useRequestData([], `${BASE_URL}/posts/`)
    console.log(feed)

    const feedCard = feed.map((post) => {
        return <CardFeed key={post.id}>
            <p>{`Enviado por: ${post.username}`}</p>
            <h3>{post.body}</h3>
            <p>{post.voteSum}</p>
        </CardFeed>
    })
    return (
        <MainContainer>
            <PostContainer>
                <input
                    placeholder="Escreva seu post..."
                />
            </PostContainer>
            <ButtonContainer>
                <button>Postar</button>
            </ButtonContainer>
            <FeedContainer>
                {feedCard}
            </FeedContainer>

        </MainContainer>
    )
}