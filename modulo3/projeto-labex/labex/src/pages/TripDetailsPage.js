import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'

export default function TripDetailsPage() {
 
    return (
        <div>
        <Stack spacing={15} direction="row">
        <Button variant="contained" type='submit'>Voltar</Button>
        <Button variant="contained" type='submit'>Enviar</Button>
        </Stack>
            </div>
    );
  }