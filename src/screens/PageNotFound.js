import { Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const PageNotFound = () => {
  return (
    <>
    <Typography variant='h4'>Page Not Found</Typography>
    <Typography variant='body1'>Go to <Link to='/'>Home</Link> page</Typography>
    </>
  )
}

export default PageNotFound