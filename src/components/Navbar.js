import styled from '@emotion/styled'
import { AppBar, Box, Container, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { NavLink } from 'react-router-dom'

const StyledNavLink = styled(NavLink) ({
    textDecoration:'none',
    fontSize:'20',
    color:'white',
    "&.active":{
      background:'navy',
      padding:10,
      borderRadius:5
    }
  })
const Navbar = () => {
  return (
    <>
    <AppBar sx={{position:'sticky'}}>
      <Container >
        <Toolbar sx={{display:'flex',justifyContent:'space-between',gap:10}}>
            <Typography variant='h5'>Marcello Tech</Typography>
            <Box sx={{display:'flex',alignItems:'center',gap:'50px'}}>
                <StyledNavLink to='/'>Home</StyledNavLink>
                <StyledNavLink to='about'>About</StyledNavLink>
                <StyledNavLink to='contact'>Contact</StyledNavLink>
                <StyledNavLink to='careers'>Careers</StyledNavLink>
            </Box>
        </Toolbar>
      </Container>
    </AppBar>
    </>
  )
}

export default Navbar