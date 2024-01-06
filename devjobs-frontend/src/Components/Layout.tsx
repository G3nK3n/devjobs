import TopHeader from './Header/TopHeader'
import SearchBar from './MainBody/SearchBox/SearchBar'
import MainBodySection from './MainBody/MainBody/MainBodySection'

import classes from './Layout.module.css'
import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'

const Layout = () => {
    
    const [filterTitle, setFilterTitle] = useState("")
    const [filterLocation, setFilterLocation] = useState("")
    const [filterPosition, setFilterPosition] = useState(false)
    
    return(
        <div className={classes.Layout}>
            <TopHeader />
            <SearchBar setFilterPosition={setFilterPosition} setFilterLocation={setFilterLocation} setFilterTitle={setFilterTitle}/>
            
            <Routes>
                <Route path="/" element={<MainBodySection filterPosition={filterPosition} filterLocation={filterLocation} filterTitle={filterTitle}/>}/>
            </Routes>
            
            
        </div>
    )
}

export default Layout