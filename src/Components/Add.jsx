import React from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Add = () => {
    const { register, handleSubmit, reset} = useForm()
    const navigate = useNavigate()
    
    const submitData = (data)=>{
        axios.post('http://localhost:8007/Employee', data)
        alert('Data Added!!!')
        reset()
        navigate('/')
    }
  return (
    <div>
        <form onSubmit={handleSubmit(submitData)}>
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
  )
}

export default Add