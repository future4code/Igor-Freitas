import { IMG } from '../../constants/url'

export const MovieCard = (props) => {
    
    return (
        <div key = {props.movie.id} onClick = {props.changePage}>
            <img src = {`${IMG}${props.mopvie.poster.path}`}/>
            <p>{props.movie.title}</p>
            <p>{newDate}</p>
        </div>
    )
}