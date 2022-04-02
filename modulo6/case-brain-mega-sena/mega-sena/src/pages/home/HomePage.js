import { useState, useEffect } from 'react'
import { getNumberResult, getLoterryResults, getContestResult } from '../../API/getLoterryInfo'
import GlobalStyle from '../../style/GlobalStyle'
import { LoterryColors, megaSena } from '../../constants/colors'
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

    const date = loterryNumber.data && loterryNumber.data.split('T')[0]
    const formatDate = date && date.split('-')
    const newDate = formatDate && `${formatDate[2]}/${formatDate[1]}/${formatDate[0]}`


    const changeLoterry = (event) => {
        resultLoterry.filter((data) => {
            if (event.target.value === data.id.toString()) {
                setLoterry(data)
            }
        })
    }

    const renderSelectLoterry = resultLoterry.map((data) => {
        return <option key={data.id} value={data.id}>
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


    return (
        <S.MainContent color={colorSelector}>
            <GlobalStyle />
            <S.MenuContent>
                <select onChange={changeLoterry}>
                    {renderSelectLoterry}
                </select>
                <h2>{loterry.nome.toUpperCase()}</h2>
                <p>Concurso Nº {getConcurseNumber[0] && getConcurseNumber[0].concursoId} - {newDate}</p>
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
                <p>Este sorteio é meramente ilustrativo e não possui nenhuma ligação com a CAIXA.</p>
            </S.NumbersContent>
            
        </S.MainContent>
    )
}
export default HomePage
