import React from 'react'
import { Routes, Route } from "react-router-dom";

import HeaderBar from './layout/HeaderBar'
import SideBar from './layout/SideBar'
import { CssBaseline, Box } from "@mui/material";

// Route
import HelloUser from './components/HelloUser'
import DataUser1 from './components/DataUser1'

import TableUser from './components/TableUser'
import EditUser from './components/EditUser'
import DataUser2 from './components/DataUser2';

export default function App() {
  return (
    <>
      <CssBaseline />
      <div className='app'>
        <SideBar />
        <main className='content'>
        <HeaderBar />
          <div className='content_body'>
            <Box m='50px'>
              <Routes>
                  <Route path='/' element={<HelloUser />}/>
                  <Route path='/Page1' element={<DataUser1 />}/>
                  <Route path='Page2' element={<DataUser2 />}/>
                  <Route path='/Table' element={<TableUser />}/>
                  <Route path='/Edit/:id' element={<EditUser />}/>
              </Routes>
            </Box>
          </div>
        </main>
      </div>
    </>
  )
}
