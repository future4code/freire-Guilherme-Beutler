
export const goToListTripPage = (navigate) => {
    navigate('/trips/list')
}

export const goToHome = (navigate) => {
    navigate('/')
}

export const goToLogin = (navigate) => {
    navigate('/login')
}

export const goToForm = (navigate) => {
    navigate('/trips/application')
}

export const goToAdmHomePage = (navigate) => {
    navigate('/admin/trips/list')
}

export const logout = (navigate) => {
    localStorage.removeItem('token')
    navigate('/login')
}

export const goToTripDetails = (navigate, id) => {
    navigate(`/admin/trips/${id}`)
}