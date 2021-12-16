import { useHistory } from "react-router-dom"
import { useLayoutEffect } from "react"
import { goToPosts } from "../routes/coordinator"

const useUnprotectedPage = () =>{
    const history = useHistory()
    useLayoutEffect(()=>{
        const token = localStorage.getItem('token')
        if(token){
            goToPosts(history)
        }
    }, [history])
}

export default useUnprotectedPage