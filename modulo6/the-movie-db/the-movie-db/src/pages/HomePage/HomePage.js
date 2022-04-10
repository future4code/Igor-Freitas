import axios from "axios"
import { useContext, useEffect } from "react"
import { useNavigate } from "react-router"
import { CardMovie } from "../../components/CardMovie/CardMovie"
import GlobalStateContext from "../../globalContext/GlobalStateContext"
import { goToMovieDetails } from "../../router/coordinator"
import * as S from './styles'


export const HomePage = () => {
    const { states, setters } = useContext(GlobalStateContext)
    const { listMovies, movieGenres } = states
    
    const navigate = useNavigate()
    const goToDetails = (id) => {
        goToMovieDetails(navigate, id)
    }

    const renderMovieGenres = movieGenres && movieGenres.map((data) => {
        return <button key={data.id}>{data.name}</button>

    })

    const renderMovies = listMovies && listMovies.map((data) => {

        return (
            <CardMovie
                key={data.id}
                movie={data}
                changePage={() => goToDetails(data.id)}
            />
        )
    })

    return (
        <S.Content>
            <S.GenreContent>
                <h1>Milhões de filmes, séries e pessoas para descobrir, Explore já.</h1>
                <p>FILTRE POR:</p>
                <S.Buttons>
                    {renderMovieGenres}
                </S.Buttons>
            </S.GenreContent>
            <S.MovieContent>
                {renderMovies}
            </S.MovieContent>
        </S.Content>
    )
}