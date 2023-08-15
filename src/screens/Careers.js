import { Typography } from '@mui/material'
import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'
import CareerList from '../components/CareerList'
import styled from '@emotion/styled'

const StyledLink = styled(Link)({
    textDecoration:'none'
  })

const Careers = () => {
    const careerData = useLoaderData()
  return (
    <>
    <Typography variant='h5' color='blue'>Careers</Typography>
    {
        careerData.map((data)=>{
            return <StyledLink to={data.id.toString()} key={data.id}>
            <CareerList title={data.title} location={data.location} />
            </StyledLink>
        })
    }
   
    </>
  )
}

export const CareerLoader =async()=>{
    const response = await fetch('http://localhost:5000/careers')
    if(!response.ok){
        throw new Error('Job Not Found')
    }
    const jsonResponse = await response.json()
    return jsonResponse
}
export default Careers