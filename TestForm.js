import React, { useState } from "react";
import axios from "axios";

export default function TestForm()

{
    const [form,setForm]=useState({})
    function handleChange(event)
    {
        const name = event.target.name
        const value = event.target.value
        console.log(form)
        setForm((prevForm)=>{return {...prevForm, [name] : value}})
    }
    function formSend(event)
    {
        console.log(event.target.name)
        console.log('test')
        axios.post('http://127.0.0.1:8000/login/',null,{params:form}).then((response)=>console.log(response))
    }
    return(
        <form onSubmit={formSend}>
            <input type='email' name='email' onChange={handleChange}></input>
            <input type='text' name='username' onChange={handleChange}></input>
            <input type='file' name='photo' onChange={handleChange}></input>
            <input type='file' name='pdf' onChange={handleChange}></input>
            <input type='submit'></input>
        </form>
    )
}