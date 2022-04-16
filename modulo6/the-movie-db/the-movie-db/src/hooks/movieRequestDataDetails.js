import axios from 'axios'
import { useEffect, useState } from 'react'


const MovieRequestDataDetails = (link) => {
    const [data, setData] = useState([])

    useEffect(() => {
        getMovieDetails()
    }, [])

    const getMovieDetails = () => {
        axios.get(link)
        .then((res) => {
            setData(res.data)
        })
        .catch((e) => {
            console.log('Erro na requisição', e)
        })
    }
    return data
}

export default MovieRequestDataDetails