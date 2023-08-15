import styled from '@emotion/styled'
import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const StyledNavButton = styled(NavLink) ({
    textDecoration:'none',
    fontSize:'20',
    color:'white',
    "&.active":{
      background:'navy',
    },
    background:'#1876D1',
    paddingTop:10,
    paddingLeft:40,
    paddingRight:40,
    paddingBottom:10,
    borderRadius:5
  })

const ContactLayout = () => {
  return (
    <>
    <Typography variant='h3' color='blue'>Contact</Typography>
    <Typography variant='body1' color='gray'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Typography>
    <Box sx={{display:'flex',alignItems:'center',justifyContent:'center',my:5,gap:5}}>
        <StyledNavButton to='mail'>Mail Us</StyledNavButton>
        <StyledNavButton to='phone'>Call Us</StyledNavButton>
    </Box>
    <Outlet/>
    </>
  )
}

export default ContactLayout