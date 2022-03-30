import axios from 'axios'
import { useState, useEffect } from 'react'
import {   getNumberResult, getLoterryResults, getContestResult  } from '../../API/getLoterryInfo'




export const HomePage = () => {
    const [ mega, setMega] = useState({id: 0, nome: "mega-sena"})
    const [ resultLoterry, setLoterryResult ] =useState([])
    const [ loterryContest, setContestMega ] = useState([])
    const [ loterryNumber, setLoterryNumber] = useState([])

    useEffect(() => {
        getLoterryResults(setLoterryResult)
        getContestResult(setContestMega)
        
    },[mega])

    useEffect(() => {
        loterryContest.filter((data) => {
            if(data.loteriaId === mega.id){
                getNumberResult(setLoterryNumber, data.concursoId)
            }
        })
    },[loterryContest])


    const changeLoterry = (event) => {
        resultLoterry.filter((data) => {
            if(event.target.value === data.id.toString()){
                setMega(data)
            }
        })
    }

    const renderSelectMega = resultLoterry.map((data) => {
        return <option key={data.id} value={data.id}>
                    {data.nome}
                </option> 
    })
    
    const renderSelectNumber = loterryNumber && loterryNumber.map((data) => {
        return <div>
            {data}
        </div>
    })

    return (
        <div>
            <select onChange={changeLoterry}>
                {renderSelectMega}
            </select>
            {renderSelectNumber}
        </div>
    )
}
export default HomePage
