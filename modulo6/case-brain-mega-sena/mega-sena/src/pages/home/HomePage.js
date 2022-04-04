import { useState, useEffect } from 'react'
import { getNumberResult, getLoterryResults, getContestResult } from '../../API/getLoterryInfo'
import GlobalStyle from '../../style/GlobalStyle'
import { LoterryColors } from '../../constants/colors'


import * as S from './styled'




export const HomePage = () => {
    const [loterry, setLoterry] = useState({ id: 0, nome: "mega-sena" })
    const [resultLoterry, setLoterryResult] = useState([])
    const [loterryContest, setContestLoterry] = useState([])
    const [loterryNumber, setLoterryNumber] = useState([])
    const [colorSelector, setColorSelector] = useState([])


    useEffect(() => {
        getLoterryResults(setLoterryResult)
        getContestResult(setContestLoterry)

    }, [loterry])

    useEffect(() => {
        loterryContest.filter((data) => {
            if (data.loteriaId === loterry.id) {
                getNumberResult(setLoterryNumber, data.concursoId)

                LoterryColors.map((color) => {
                    if (loterry.id === color.id) {
                        setColorSelector(color.color)
                    }
                })

            }
        })
    }, [loterryContest])




    const changeLoterry = (event) => {
        resultLoterry.filter((data) => {
            if (event.target.value === data.id.toString()) {
                setLoterry(data)
            }
        })
    }



    const renderSelectLoterry = resultLoterry.map((data) => {
        return <option key={data.id} value={data.id} >
            {data.nome}
        </option>
    })

    const renderSelectNumber = loterryNumber && loterryNumber.map((data) => {
        return <S.NumberBall>
            {data}
        </S.NumberBall>
    })
    const getSelectLoterryResult = loterryNumber.numeros && loterryNumber.numeros.map((numbers, index) => {
        return <S.NumberBall key={index}>
            {numbers}
        </S.NumberBall>
    })

    const getConcurseNumber = loterryContest && loterryContest.filter((number) => {
        return number.loteriaId === loterry.id
    })





    const date = new Date()
    const newDate = date.toLocaleDateString()

    return (
        <S.MainContent color={colorSelector}>
            <GlobalStyle />

            <S.MenuContent>
                <select onChange={changeLoterry}>
                    {renderSelectLoterry}
                </select>
                <div>
                    <h2>
                        {loterry.nome.toUpperCase()}
                    </h2>
                </div>

                    <p>Concurso</p>
                    <b>{getConcurseNumber[0] && getConcurseNumber[0].concursoId} - {newDate} </b>
               
            </S.MenuContent>

            <S.Division>
                <svg id="Camada_1" data-name="Camada 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2436 252">
                    <path class="cls-1" d="M0,494s1000-243,2436,0V638H0Z" transform="translate(0 -386)" />
                </svg>
            </S.Division>

            <S.NumbersContent>
                <div>
                    {renderSelectNumber}

                </div>

                <S.Footer>
                    <p>Este sorteio é meramente ilustrativo e não possui nenhuma ligação com a CAIXA.</p>

                </S.Footer>

            </S.NumbersContent>

        </S.MainContent>
    )
}
export default HomePage
