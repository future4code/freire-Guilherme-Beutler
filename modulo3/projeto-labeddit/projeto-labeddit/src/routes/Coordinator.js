export const goToFeedPage = (navigate) => {
    navigate('/feed')
}

export const goToPostPage = (navigate, id) => {
    navigate(`/posts/${id}`)
}

export const goToSignUpPage = (navigate) => {
    navigate('/sign')
}

export const goToLoginPage = (navigate) => {
    navigate('/')
}