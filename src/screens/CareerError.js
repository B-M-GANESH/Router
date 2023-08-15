import styled from '@emotion/styled'
import { Typography } from '@mui/material'
import React from 'react'
import { Link, useRouteError } from 'react-router-dom'
const StyledLink =styled(Link)({
    textDecoration:'none'
})
const CareerError = () => {
    const error = useRouteError()
  return (
    <>
    <Typography variant='h5'> Something Went Wrong...</Typography>
    <Typography variant='h5'>{error.message}</Typography>
    <StyledLink to='/' >Go to Home...</StyledLink>
    </>
  )
}

export default CareerError
