import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { SingIn, SingUp } from '../../pages/Login'

function LoginRoutes() {
  return (
    <Routes>
        <Route path='/' element={<SingIn/>}/>
        <Route path='/sign-up' element={<SingUp/>}/>
    </Routes>
  )
}

export default LoginRoutes
