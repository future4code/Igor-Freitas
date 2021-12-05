import axios from 'axios'
import {useState, useEffect} from 'react'
import Matches from './Matches'
import { AiFillFire } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";
import { MdCancel } from "react-icons/md";
import { IoMdRefresh } from "react-icons/io";
import * as C from './styles'



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
        alert('API Resetada')
    })
    .catch((error)=>{
        console.log(error.response.data)
    })
}


const changePage = () =>{
  if(page === 1){
      return pickInfo
  } else if(page === 2){
      return <Matches changePage={onClickHome} reset={reset}/>
  }
}
const onClickMatches = () =>{
     setPage(2)
}
const onClickHome = () =>{
    setPage(1)
}




console.log(profile)
const pickInfo = <C.DivToda>
                <C.GlobalStyle/>
                <C.Titulo>
                <h2>AstroMatch</h2> 
            <div><AiFillFire onClick={onClickMatches} size='30px' color='red'/></div>
                </C.Titulo>
                
                <C.Card>
                <h3>{profile.name }, {profile.age}</h3>
                <img src={profile.photo} />
                <p>{profile.bio}</p>
                
                <C.Button>
                <div>
                <MdCancel onClick={getProfile} size='40px' color='gray'  />
                </div>

                <div>
                <AiFillHeart onClick={choosePerson} size='40px' color='red'/>
                </div>
                </C.Button>
                <IoMdRefresh onClick={reset} color='red'/>
                </C.Card>
                </C.DivToda>
                

console.log(matches)
const pickMatches = <div>
                <img src={matches.photo}/>
                <p>{matches.name}</p>
                <div>{matches.bio}</div>
                </div>


    return(
        <div>
           {changePage()}

        </div>
    )
}