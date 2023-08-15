import { Box, Divider, Typography } from '@mui/material'
import React from 'react'
import { useLoaderData, useParams } from 'react-router-dom'

const CareerDetail = () => {
    // const {id} = useParams() 
    const jobData = useLoaderData()
  return (
   <>
    <Divider sx={{mx:20,my:5}}/>
    <Box>
     <Typography variant='h4'>{jobData.title}</Typography>
     <Typography variant='h5' color='blue'>{jobData.salary}</Typography>
     <Typography variant='body1' color='grey'>{jobData.location}</Typography>
    </Box>
   </>
  )
}
export const JobDetailLoader = async ({params}) =>{
    const {id} = params
    const response =await fetch('http://localhost:5000/careers/'+id)
    if(!response.ok){
        throw new Error('job data are not found')
    }
    const jsonResponse = await response.json()
    return jsonResponse
}

export default CareerDetail