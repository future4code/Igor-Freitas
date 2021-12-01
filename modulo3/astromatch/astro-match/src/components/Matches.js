import axios from 'axios'
import {useState, useEffect} from 'react'
import * as C from '../styles'


export default function Matches (props){
    const [matches, setMatches] = useState([])

    useEffect(()=>{
        getMatches()
    },[])

    
    const getMatches = () =>{
        axios
        .get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/IgorMF/matches')
        .then((response)=>{
            setMatches(response.data.matches)
        })
        .catch((error)=>{
            console.log(error.response)
        })
    }
     const matchesOk = matches.map((matched)=>{
         return(
            <div>
           <img src={matched.photo} width='80px' height='80px'/>
            <p>{matched.name}</p>
        </div>
         )
        
     })
    return(
        <div>
            <button onClick={props.changePage}>Voltar</button>
           {matchesOk}
        </div>
    )
}