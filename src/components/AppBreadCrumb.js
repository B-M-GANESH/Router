import styled from '@emotion/styled'
import { Breadcrumbs } from '@mui/material'
import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Style = styled(Link)({
    textDecoration:'none'
})
const AppBreadCrumb = () => {
    const location = useLocation()
    let crumblink =''
    const breadcrumb = location.pathname.split('/')
    .filter((crumb)=>crumb !== "")
    .map((crumb)=>{
        crumblink += `/${crumb}`
        return <Style to={crumblink} key={crumb}>{crumb}</Style>
    })
    console.log(breadcrumb);
  return (
    <Breadcrumbs arial-aria-label='breadcrumd'>{breadcrumb}</Breadcrumbs>
)
}

export default AppBreadCrumb