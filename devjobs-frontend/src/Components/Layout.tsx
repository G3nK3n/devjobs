import TopHeader from './Header/TopHeader'
import SearchBar from './MainBody/SearchBox/SearchBar'
import MainBodySection from './MainBody/MainBody/MainBodySection'
import JobPostingDetailsLayout from './MainBody/JobPostingDetails/JobPostingDetailsLayout'
import { Box, useColorModeValue } from '@chakra-ui/react'

import classes from './Layout.module.css'
import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'


const Layout = () => {
    
    const [filterTitle, setFilterTitle] = useState("")
    const [filterLocation, setFilterLocation] = useState("")
    const [filterPosition, setFilterPosition] = useState(false)

    const theBackgroundColor = useColorModeValue('#F4F6F8', '#121721');
    
    return(
        <Box backgroundColor={theBackgroundColor}>

            <TopHeader />
            
            <Routes>
                <Route path="/" element={<><SearchBar setFilterPosition={setFilterPosition} setFilterLocation={setFilterLocation} setFilterTitle={setFilterTitle}/><MainBodySection filterPosition={filterPosition} filterLocation={filterLocation} filterTitle={filterTitle}/></>}/>
                <Route path="/:companyID/posting" element={<JobPostingDetailsLayout />} />
            </Routes>
            
            
        </Box>
    )
}

export default Layout