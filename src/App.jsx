import React from 'react'
import Sidebar from './components/Sidbar/Sidebar'
import Header from './components/Header/Header'
import { Routes, Route } from 'react-router-dom'
import './App.css'

import Products from './components/Products/Products'
import Comments from './components/Comments/Comments'
import Users from './components/Users/Users'
import Orders from './components/Orders/Orders'
import Offs from './components/Offs/Offs'

export default function App() {
  return (
    <>
      <Sidebar />
      <div className="main">
        <Header />
        {/* Router */}
        <Routes>
          <Route path='/product' element={<Products />} />
          <Route path='/comments' element={<Comments />} />
          <Route path='/users' element={<Users />} />
          <Route path='/orders' element={<Orders />} />
          <Route path='/offs' element={<Offs />} />
        </Routes>
      </div>
    </>
  )
}
