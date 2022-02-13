import React from 'react'
import './App.css'
import AppRoutes from './routes/Routes'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Header />
      <body>
        <AppRoutes />
      </body>
      <Footer />
    </>
  )
}

export default App
