import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { NavLink, useNavigate } from 'react-router-dom'

const Show = () => {
        const [employee, setEmployee] = useState([])
        const navigate = useNavigate()

        const getDetails = async ()=>{
            const res = await axios.get('http://localhost:8007/Employee')
            const result = res.data
            setEmployee(result)
        }
        useEffect(()=>{
            getDetails()
        }, [])
   

  return (
    <div>

     <thead>

        <table>
            <thead style={{color:red}}>

                <tr>
                    <th>Sr No.</th>
                    <th>FIRST NAME</th>
                    <th>LAST NAME</th>
                    <th>DOB</th>
                    <th>SALARY</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                employee.map((emp, index)=>{
                    return(
                        <tr key={emp.id}>
                            <td>{index+1}</td>
                            <td>{emp.fname}</td>
                            <td>{emp.lname}</td>
                            <td>{emp.dob}</td>
                            <td>{emp.sal}</td>
                            <td>
                            <NavLink to={`/update/${emp.id}`}><button>edit</button></NavLink>
                            <NavLink to={`/delete/${emp.id}`}><button>delete</button></NavLink>
                            </td>
                        </tr>
                    )
                })
            }
            </tbody>
        </table>
    </div>
  )
}

export default Show
