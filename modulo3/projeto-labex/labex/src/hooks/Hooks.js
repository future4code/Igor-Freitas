import { URL_BASE } from "../constants/url";
import axios from "axios";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";



export const useProtected = () =>{
    const history = useHistory()
    useEffect(()=>{
        const token = localStorage.getItem('token')
        if(token === null) {
            history.push('/adm')
        }
    },[])
}

export const useGetList = () =>{
    const [trips, setTrips] = useState([])

    useEffect(()=>{
        getTrips()
    },[])

    const getTrips = () =>{
        axios
        .get(`${URL_BASE}/trips`)
        .then((res)=>{
            setTrips(res.data.trips)
        })
        .catch((err)=>{
            console.log(err.response)
        })
    }
    return trips
}

export const headers = {
    headers: {
        auth:localStorage.getItem('token')
    }
}


export const useForm = (initialState)=>{
    const [form, setForm] = useState(initialState)
    const onChange = (e) =>{
        const {name, value} = e.target
        setForm({...form, [name]: value})
    }
    const cleanTheField = () =>{
        setForm(initialState)
    }
    return {form, onChange, cleanTheField}
}
export default useForm


