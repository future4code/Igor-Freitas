import React from 'react'
import Erro from '../../assets/erro.png'
import * as C from './styled'
import { Typography } from '@material-ui/core'


export default function Error() {
  return (
    <C.BackgroundContainer>
     <C.ImgErro src={Erro}/>
     <Typography color={'primary'} variant={'h4'} align={'center'}> ERRO 404 - Página Não Encontrada</Typography>
    </C.BackgroundContainer>
  );
}


