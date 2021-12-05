import axios from 'axios'
import { BsBack } from "react-icons/bs"
import {useState, useEffect} from 'react'
import { IoMdRefresh } from "react-icons/io";
import * as C from './styles'


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
            <C.Maches>
           <img src={matched.photo} width='90px' height='80px'/>
            <div><p>{matched.name}</p></div>
        </C.Maches>
         )
        
     })
    return(
        <div>
             <BsBack onClick={props.changePage} size='30px' color='red'/>
           <C.Maches>
           {matchesOk}
           </C.Maches>
           <IoMdRefresh onClick={props.reset} color='red'/>
        </div>
    )
}

