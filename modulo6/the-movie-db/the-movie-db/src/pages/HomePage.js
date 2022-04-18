import { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import GlobalStateContext from '../globalContext/GlobalContext'
import {MovieCard} from '../components/MovieCard/MovieCard'
import {goToMovieDetails} from '../router/coordinator'



export const HomePage = () => {
    const { states, setters } = useContext(GlobalStateContext)
    const { movieList, movieGenres } = states



    const navigate = useNavigate()
    const gotoDetails = (id) => {
        goToMovieDetails(navigate, id)
    }

    const renderGenres = movieGenres && movieGenres.map((genres) => {
        return <button key={genres.id}>{genres.name}</button>
    })

    const renderMovies = movieList && movieList.map((movie) => {
        return (
            <MovieCard
                key={movie.id}
                movie={movie}
                changePage={() => gotoDetails(movie.id)}
            />


        )
    })

    return (
        <div>
            <div>
                <h1>Milhões de filmes, séries e pessoas para descobrir, Explore já</h1>
                <p>FILTE POR:</p>

                <div>
                    {renderGenres}
                </div>

            </div>
            <div>
              
            </div>
        </div>
    )
}

