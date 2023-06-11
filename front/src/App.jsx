import { useState } from 'react'
import { Routes, Route, Navigate } from "react-router-dom";
import {Login} from './pages/Login/login';
import {Register} from './pages/Register/register';
import { Dashboard } from './pages/Dashboard/dashboard';
import { Protector } from './pages/Protector/protector';
import { Logout } from './pages/Logout/logout';

// when you fetch data use line adres bellow instead of full address
// import.meta.env.API_URL
// later on changing api url from 127.0.0.1 will be done by changing just one line instead of 1000 lines

function App() {
  const [count, setCount] = useState(0)
  return (
    <div className='main'>
      <Routes>
        <Route exact path='/' element={<Protector />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/logout' element={<Logout />}></Route>
        <Route 
          path='/dashboard' 
          element={
          <Protector>
              <Dashboard />
          </Protector>}>
        </Route>
      </Routes>
    </div>
  )
}

export default App
