import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import { useHistory } from 'react-router-dom'
import { useForm } from '../hooks/Hooks'
import { useProtected } from '../hooks/Hooks'
import { headers } from '../hooks/Hooks'
import axios from 'axios'
import { URL_BASE} from '../constants/url'
import * as C from '../styles'
import Swal from 'sweetalert2'

export default function CreateTripPage() {
    const { form, cleanTheField, onChange } = useForm({
        name: '',
        date: '',
        planet: '',
        description: '',
        durationInDays: ''
    })

    const history = useHistory()

    const goToAdmHome = () => {
        history.push('/admhome')
    }

    useProtected()

    const createTrips = (e) => {
        e.preventDefault()
        const body = {
            name: form.name,
            date: form.date,
            planet: form.planet,
            description: form.description,
            durationInDays: form.durationInDays
        }
        axios
        .post(`${URL_BASE}/trips`, body, headers)
        .then(() => {
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Viagem Criada!',
                showConfirmButton: false,
                timer: 1500
              })
            cleanTheField()
        })
        .catch((err) => {
            alert(err.response)
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Algo deu errado!',
                footer: '<b>Confira seu login e senha</b>'
              })
        })
            
    }

    return (
        <div>
            <C.GlobalStyle/>
            <C.Title><p>Criar Viagem</p></C.Title>
            <C.DivForm>

            <form onSubmit={createTrips}>

            <select placeholder="Planeta" name="planet" value={form.planet} onChange={onChange} required>
                    <option value="" disabled="" selected="">Escolha um Planeta</option>
                    <option value="Mercúrio">Mercúrio</option>
                    <option value="Vênus">Vênus</option>
                    <option value="Terra">Terra</option>
                    <option value="Marte">Marte</option>
                    <option value="Jupiter">Jupiter</option>
                    <option value="Saturno">Saturno</option>
                    <option value="Urano">Urano</option>
                    <option value="Netuno">Netuno</option>
                    <option value="Plutão">Plutão</option>
                </select>


                <input
                    name="name"
                    value={form.name}
                    onChange={onChange}
                    placeholder="Nome"
                    required
                />

                <input
                    type="date"
                    name="date"
                    value={form.date}
                    onChange={onChange}
                    required
                />
                <input
                    name="description"
                    value={form.description}
                    onChange={onChange}
                    placeholder="Descrição"
                    required
                    pattern={"^.{30,}"}
                    title='Preencha no mínimo com 30 caracteres!'
                />
                <input
                    name="durationInDays"
                    value={form.durationInDays}
                    onChange={onChange}
                    placeholder="Duração de dias"
                    required
                    type='number'
                />
            </form>
            </C.DivForm>
            <C.ButtonForm>
            <Stack spacing={15} direction="row">
                <Button variant="contained" type='submit' onClick={goToAdmHome}>Voltar</Button>
                <Button variant="contained" type='submit'onClick={createTrips}>Criar</Button>
            </Stack>
            </C.ButtonForm>
        </div>
    );
}