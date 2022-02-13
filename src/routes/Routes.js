import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Splash from '../screens/Splash/Splash'
import CustomerDashboard from '../screens/Customer/Dashboard'
import DeliverymanDashboard from '../screens/Deliveryman/Dashboard'
import DisplayWeather from '../screens/Weather/Weather'

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Splash />} />
        {/* Customer Routes */}
        <Route
          exact
          path='/customer/dashboard'
          element={<CustomerDashboard />}
        />
        {/* DeliveryMan Routes */}
        <Route
          path='/deliveryman/dashboard'
          element={<DeliverymanDashboard />}
        />
        {/* Weather Routes */}
        <Route
          path='/weather'
          element={<DisplayWeather />}
        />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes
