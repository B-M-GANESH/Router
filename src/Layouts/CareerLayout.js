import { Container, Typography } from '@mui/material'
import React from 'react'
import { Outlet } from 'react-router-dom'

const CareerLayout = () => {

  return (
    <>
   
    <Typography variant='body1' color='gray'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</Typography>
    <Container sx={{p:5}}>
        <Outlet/>
    </Container>
    </>
  )
}

 


export default CareerLayout