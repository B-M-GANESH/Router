import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'
import { Container } from '@mui/material'
import AppBreadCrumb from '../components/AppBreadCrumb'

const RootLayout = () => {
  return (
    <>
    <Navbar />
     <Container sx={{p:3}}>
        <AppBreadCrumb/>
    </Container>
    <Container sx={{p:2}}>
    <Outlet/>
    </Container>
    </>
  )
}

export default RootLayout