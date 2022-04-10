import GlobalStateContext from '../../globalContext/GlobalStateContext'
import { useContext, useState } from 'react'
import { useParams } from 'react-router'
import { IMAGE_URL } from '../../constants/urls'
import movieRequestDataDetails from '../../hooks/movieRequestDataDetails'
import MovieRequestDataInfo from '../../hooks/movieRequestDataInfo'
import * as S from './styles'

export const MovieDetails = () => {
    const { states, setters } = useContext(GlobalStateContext)
    const { listMovies, movieGenres, } = states
    const [movieDetail, setMovieDetail] = useState([])
    const params = useParams()

    const detailMovie = movieRequestDataDetails(params.movieId)
    const movieInfos = MovieRequestDataInfo(params.movieId)




    const movieFilter = listMovies && listMovies.filter((data) => {
        return data.id == params.movieId
    })

    const movie = movieFilter[0]
    const releaseDate = movie && movie.release_date
    const newDate = releaseDate && releaseDate.split('-')
    const releaseYear = newDate && newDate[0]
    const popularity = movie && movie.popularity




    const renderMovie = (
        <S.Container>
            <S.Img src={`${IMAGE_URL}${movie && movie.poster_path}`} />
            <S.InfoContent>
                <h1>{movie && movie.title} ({releaseYear})</h1>
                <S.DetailsContent>
                    {releaseDate}
                </S.DetailsContent>
                <S.AverageContent>
                    {movie.vote_average}
                </S.AverageContent>
                <h2>Sinopse</h2>
                <h3>{movie && movie.overview}</h3>
            </S.InfoContent>
        </S.Container>
    )

    return (
        <div>
            {renderMovie}
        </div>
    )
}