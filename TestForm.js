import React, { useState } from "react";
import axios from "axios";

export default function TestForm()

{
    const [form,setForm]=useState({})
    const [res,setRes] = useState()
    const [file, setFile] = useState();
    const formData = new FormData()

    const handleFileChange = (e) => {
    if (e.target.files) {
    formData.append(e.target.name,e.target.files[0])
    }
  };
    function handleChange(event)
    {
        const name = event.target.name
        const value = event.target.value
        console.log(form)
        console.log(res)
        setForm((prevForm)=>{return {...prevForm, [name] : value}})
    }
    function formSend(event)
    {
        console.log(event.target.name)
        console.log('test')
        console.log(form)
        let {email,username}=form
        formData.append('email',email)
        formData.append('username',username)
        axios.post('http://127.0.0.1:8000/login/',formData,{headers:{
            "content-type": "multipart/form-data",
        }}).then((response)=>setRes(response))
    }
    return(
        <form onSubmit={formSend}>
            <input type='email' name='email' onChange={handleChange}></input>
            <input type='text' name='username' onChange={handleChange}></input>
            Photo
            <input type='file' name='photo' onChange={handleFileChange}></input>
            PDF
            <input type='file' name='pdf' onChange={handleFileChange}></input>
            <input type='button' onClick={formSend}></input>
            <input type='submit'></input>
        </form>
    )
}
