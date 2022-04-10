import * as S from "./styles"
import logo from "../../assets/logo_TMDB.png"

export const Header = () => {
    return (
        <S.Header>
            <img src={logo}/>
        </S.Header>
    )
}