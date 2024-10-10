import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Overview } from '../../pages/Dashboard'

function DashboardRoutes() {
  return (
    <Routes>
        <Route path='/overview' element={<Overview/>}/>
    </Routes>
  )
}

export default DashboardRoutes
