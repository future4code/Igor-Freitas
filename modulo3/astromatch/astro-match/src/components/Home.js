import axios from 'axios'
import {useState, useEffect} from 'react'
import Matches from './Matches'
import * as C from '../styles'
import {BsHeartFill} from 'react-icons/bs'

export default function Home (){
const [profile, setProfile] = useState({})
const [matches, setMatches] = useState({})
const [page, setPage] = useState(1)

useEffect(()=>{
    getProfile()
},[])


const getProfile = () =>{
    axios
    .get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/IgorMF/person')
    .then((response)=>{
        setProfile (response.data.profile)
    })
    .catch((error)=>{
        console.log(error.response)
    })
}




const choosePerson = () =>{
    const url = ('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/IgorMF/choose-person')
    const body ={
        id: profile.id,
        choice: true
    }
    axios
    .post(url,body)
    .then((response)=>{
        getProfile()
        console.log('person',response.data)
    })
    .catch((error)=>{
        console.log(error.response)
    })
}

const reset = () =>{
    axios
    .put('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/IgorMF/clear')
    .then((response)=>{
        console.log(response.data)
    })
    .catch((error)=>{
        console.log(error.response.data)
    })
}


const changePage = () =>{
  if(page === 1){
      return pickInfo
  } else if(page === 2){
      return <Matches changePage={onClickHome}/>
  }
}
const onClickMatches = () =>{
     setPage(2)
}
const onClickHome = () =>{
    setPage(1)
}




console.log(profile)
const pickInfo = <div>
                <div>
                   <h3>AstroMatch</h3>
                   <button onClick={onClickMatches}>Matches</button>
                </div>
                <p>{profile.name}</p>
                <img src={profile.photo} width='200px' height='200px'/>
                <div>{profile.bio}</div>
                <div>{profile.age}</div>
                <button onClick={getProfile}>X</button>
                <button onClick={choosePerson}>♥</button>
                    
                </div>

console.log(matches)
const pickMatches = <div>
                <img src={matches.photo} width='50px' height='50px'/>
                <p>{matches.name}</p>
                <div>{matches.bio}</div>
                </div>


    return(
        <div>
           {changePage()}
           <div>
               <button onClick={reset}>Reset</button>
           </div>
        </div>
    )
}