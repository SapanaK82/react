
import './App.css'
import Add from './Components/Add'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Show from './Components/Show'
import Update from './Components/Update'
import Delete from './Components/Delete'

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/add' element={<Add/>}/>
          <Route path='/' element={<Show/>}/>
          <Route path='/update/:employee' element={<Update/>}/>
          <Route path='/delete/:employee' element={<Delete/>}/>
        </Routes>
      </BrowserRouter>
     
    </div>
  )
}

export default App
