export const goToLogin = (history) =>{
    history.push('/')
}
export const goToRegister = (history) =>{
    history.push('/register')
}
export const goToPosts = (history) =>{
    history.push('/posts')
}
export const goToFeed = (history, id) =>{
    history.push(`/feed/${id}`)
}