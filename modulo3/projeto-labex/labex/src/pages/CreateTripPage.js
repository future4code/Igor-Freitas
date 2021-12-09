import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'

export default function CreateTripPage() {
 
    return (
        <div>
            <p>Criar Viagem</p>
        <Stack spacing={15} direction="row">
        <Button variant="contained" type='submit'>Voltar</Button>
        <Button variant="contained" type='submit'>Criar</Button>
        </Stack>
            </div>
    );
  }