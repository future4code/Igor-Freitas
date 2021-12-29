export const goToLogin = (history) =>{
    history.push('/login')
}
export const goToRegister = (history) =>{
    history.push('/cadastro')
}
export const goToPosts = (history) =>{
    history.push('/posts')
}
export const goToFeed = (history) =>{
    history.push('/')
}

export const goToDetail = (history, id) =>{
    history.push(`/posts/${id}`)
}