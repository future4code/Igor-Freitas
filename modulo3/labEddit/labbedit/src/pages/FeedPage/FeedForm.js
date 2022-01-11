import React from "react";
import axios from "axios";
import useForm from "../../hooks/useForm";
import BASE_URL from "../../constants/urls";
import { Button } from '@material-ui/core';
import { TextField } from '@material-ui/core'
import useUnprotectedPage from '../../hooks/useUnprotectedPage'
import {  TiTimesOutline } from "react-icons/ti";
import * as C from './styled'


const FeedForm = (props) => {
    useUnprotectedPage()
    const [ form, onChange, clear ] = useForm({ title: '', body: '' })

    const createPost = (e) => {
        e.preventDefault()
        axios
            .post(`${BASE_URL}/posts`, form, {
                headers: {
                    Authorization: localStorage.getItem('token')
                }
            })
            .then((res) => {
                props.getPosts()
                clear()
            })
            .catch((err) => {
                alert(err)
            })
    }
    return (
        <C.DivPost>
            <div>
                <form onSubmit={createPost}>
                    <TextField
                        id="outlined-basic"
                        label="Titulo"
                        variant="outlined"
                        type='text'
                        name={'title'}
                        onChange={onChange}
                        value={form.title}
                        margin='normal'
                        required
                        fullWidth
                    />
                    <div>
                    <TextField 
                        id="outlined-secondary"
                        label="No que você está pensando?"
                        variant="outlined"
                        rows={7}
                        multiline
                        fullWidth
                        type='text'
                        name={'body'}
                        onChange={onChange}
                        value={form.body}
                        style = {{width: 400}}
                        required
                    />
                    </div>
                    <Button
                         type={'submit'}
                         variant={'contained'}
                         color='primary'
                         fullWidth
                    >
                        Postar
                    </Button>
                    </form>
                    <C.ButtonPost>
                    <div>
                    <TiTimesOutline onClick={props.renderFalse}/>
                    </div>
                    </C.ButtonPost>
            </div>
        </C.DivPost>
    )
}
export default FeedForm