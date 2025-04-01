import React, { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const Delete = () => {
    const { employee } = useParams()
    const [emp, setEmp ] = useState('')
    const navigate = useNavigate()

    const getData = async()=>{
        const response = await axios.get(`http://localhost:8007/Employee/${employee}`)
        const res = response.data
        setEmp(res)

    }
    useEffect(()=>{
        getData()
    },[])

    const deleteData = () =>{
        axios.delete(`http://localhost:8007/Employee/${employee}`)
        alert('data deleted!!')
        navigate('/')
    }
 

  return (
    <div>
        <h1>Delete Confirmation</h1>
        <h3>ID - {emp.id}</h3>
        <h3>Name -{emp.fname} </h3>
        <button onClick={deleteData}>YES</button>
        <NavLink to={'/'}><button>NO</button></NavLink>
    </div>
  )
}

export default Delete