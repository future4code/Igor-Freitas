import React from 'react';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno'
import styled, {createGlobalStyle}  from 'styled-components'

const GlobalStyle = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
`

const AppFlex = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
`

const PageSectionContainer = styled.div`
  width: 40vw;
  margin: 10px 0;
`
const H2 = styled.h2`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;

`

function App() {
  return (
    <div>
    <AppFlex>
      <GlobalStyle/>
      <PageSectionContainer>
        <H2>Dados pessoais</H2>
        <CardGrande 
          imagem="https://i.postimg.cc/q7cFkw2S/foto.png" 
          nome="Igor Medeiros" 
          descricao="Sou aluno do curso de Desenvolvedor Full Stack na Labenu. Não tenho experiência formal no âmbito da T.I"
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </PageSectionContainer>

      <CardPequeno/>

      <PageSectionContainer>
        <H2>Experiências profissionais</H2>
        <CardGrande 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="Labenu" 
          descricao="Aluno no curso de DEV FULL STACK" 
        />
        
        <CardGrande 
          imagem="https://logodownload.org/wp-content/uploads/2019/03/nasa-logo-6.png" 
          nome="NASA" 
          descricao="Apontando defeitos." 
        />
      </PageSectionContainer>

      <PageSectionContainer>
        <H2>Minhas redes sociais</H2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </PageSectionContainer>
    </AppFlex>
    </div>
  );
}

export default App;
