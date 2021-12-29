import axios from "axios";
import BASE_URL from "../../constants/urls";
import useForm from "../../hooks/useForm";
import { Button } from '@material-ui/core';
import { TextField } from "@material-ui/core";
import Swal from 'sweetalert2'
import * as C from './styled'

const PostForm = (props) => {

    const [form, onChange, clear] = useForm({ body: '' })

    const createComment = (e) => {
        e.preventDefault()
        axios
            .post(`${BASE_URL}/posts/${props.paramsId}/comments`, form, {
                headers: {
                    Authorization: localStorage.getItem('token')
                }
            })
            .then((res) => {
                alert('ok')
                clear()
                props.getComments()
            })
            .catch((err) => {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Algo deu errado!',
                  })
            })
    }
    return (
        <C.FormComment>
            <form onSubmit={createComment}>
                <TextField
                    name={'body'}
                    onChange={onChange}
                    value={form.body}
                    label={'Comentário'}
                    required
                    margin={'normal'}
                    type={'text'}
                    fullWidth
                    variant={'outlined'}
                    multiline

                />

                <Button
                    type={'submit'}
                    fullWidth
                    variant={"contained"}
                    color={'primary'}
                >Comentar</Button>

            </form>
        </C.FormComment>
    )
}

export default PostForm