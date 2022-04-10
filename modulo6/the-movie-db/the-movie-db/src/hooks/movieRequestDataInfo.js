import axios from 'axios'
import { useEffect, useState } from 'react'
import { API_KEY } from '../constants/api_key'
import { BASE_URL } from '../constants/urls'

const MovieRequestDataInfo = (id) => {
    const [data, setData] = useState([])

    useEffect(() => {
        getMovieInfos()
    }, [])

  
    const getMovieInfos = () => {
        axios.get(`${BASE_URL}/movie/${id}/release_dates${API_KEY}`)
        .then((res) => {
            setData(res.data)
            // console.log('details', res.data)
        })
        .catch((err) => {
            console.log('Erro no get de informações', err)
        })
    }
    return data
}

export default MovieRequestDataInfo