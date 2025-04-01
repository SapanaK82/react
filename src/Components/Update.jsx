import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'


const Update = () => {
    const { register, handleSubmit, reset, setValue } = useForm()
const { employee } = useParams()
const navigate = useNavigate()


const getData = async ()=>{
    const res = await axios.get(`http://localhost:8007/Employee/${employee}`)
    setValue('fname', res.data.fname)
    setValue('lname', res.data.lname)
    setValue('dob', res.data.dob)
    setValue('sal', res.data.sal)
    }

    useEffect(()=>{
        getData()
    },[])

    const UpdateData = (data) =>{
        axios.put(`http://localhost:8007/Employee/${employee}`, data)
        alert('data updated')
        navigate('/')
    }

  return (
    <div>
    <h1>Update Form</h1>
    <div>
    <form onSubmit={handleSubmit(UpdateData)}> 
        Employee First Name:<input type='text' {...register('fname')}/>
        <br/><br/>
        Employee Last Name:<input type='text' {...register('lname')}/>
        <br/><br/>
        Employee DOB:<input type='text' {...register('dob')}/>
        <br/><br/>
        Employee Salary:<input type='text' {...register('sal')}/>
        <br/><br/>
        <button>Submit</button>
        <button>Reset</button>
    </form>
    </div>
</div>
  )
}

export default Update






