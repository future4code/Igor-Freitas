import { useContext} from 'react'
import { useNavigate } from 'react-router'
import { CardMovie } from '../../components/CardMovie/CardMovie'
import GlobalStateContext from '../../globalContext/GlobalStateContext'
import { goToMovieDetails } from '../../router/coordinator'
import Pagination from '@mui/material/Pagination'
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

    const onChangePagination = (value) => {
        setters.setPagination(value)
       
    }

    return (
        <S.MainContent>
            <S.GenreContent>
                <h1>Milhões de filmes, séries e pessoas para descobrir, Explore já.</h1>
                <p>FILTRE POR:</p>
                <S.Buttons>
                    {renderMovieGenres}
                </S.Buttons>
            </S.GenreContent>
            <S.MoviesContent>
                {renderMovies}
            <Pagination count={500} defaultPage={1}  onChange={onChangePagination}/>
            </S.MoviesContent>
        </S.MainContent>
    )
}