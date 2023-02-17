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
        let {email,fname,lname,is_mentor,rank}=form
        formData.append('email',email)
        formData.append('fname',fname)
        formData.append('lname',lname)
        // formData.append('is_mentor',is_mentor)
        formData.append('rank',rank)
        axios.put('http://127.0.0.1:8000/update/',formData,{headers:{
            "content-type": "multipart/form-data",
        }}).then((response)=>setRes(response))
    }
    return(
        <form onSubmit={formSend}>
            Email
            <input type='email' name='email' onChange={handleChange}></input>
            fname
            <input type='text' name='fname' onChange={handleChange}></input>
            lname
            <input type='text' name='lname' onChange={handleChange}></input>
            mentor
            <input type='checkbox' name='is_mentor' onChange={handleChange}></input>
            rank
            <input type='text' name='rank' onChange={handleChange}></input>
            Photo
            <input type='file' name='photo' onChange={handleFileChange}></input>
            <input type='button' onClick={formSend}></input>
            <input type='submit'></input>
        </form>
    )
}
