import React from 'react'
import Sidebar from './components/Sidbar/Sidebar'
import Header from './components/Header/Header'
import { useRoutes } from 'react-router-dom'
import routes from './routes'
import './App.css'

export default function App() {

  const router = useRoutes(routes)

  return (
    <>
      <Sidebar />
      <div className="main">
        <Header />
        {/* Router */}
        {router}
      </div>
    </>
  )
}
