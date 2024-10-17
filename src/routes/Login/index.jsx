import React, { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { SingUp } from '../../pages/Login'
import Loading from "../../assets/images/loading.png"

const SingIn = lazy(() => new Promise((resolve) => {
  return setTimeout(() => resolve(import("../../pages/Login/SingIn")), 1500)
}))

function LoginRoutes() {
  return (
    <Routes>
        <Route path='/' element={
          <Suspense fallback={
            <img className="absolute top-0 bottom-0 left-0 right-0 m-auto" src={Loading} alt="" width={150} />
          }><SingIn/></Suspense>
        }/>
        <Route path='/sign-up' element={<SingUp/>}/>
    </Routes>
  )
}

export default LoginRoutes
