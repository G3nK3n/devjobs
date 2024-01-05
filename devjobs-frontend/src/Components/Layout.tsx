import TopHeader from './Header/TopHeader'
import SearchBar from './MainBody/SearchBox/SearchBar'
import MainBodySection from './MainBody/MainBody/MainBodySection'

import classes from './Layout.module.css'
import { useState } from 'react'

const Layout = () => {
    
    const [filterTitle, setFilterTitle] = useState("")
    const [filterLocation, setFilterLocation] = useState("")
    const [filterPosition, setFilterPosition] = useState(false)
    
    return(
        <div className={classes.Layout}>
            <TopHeader />
            <SearchBar setFilterLocation={setFilterLocation} setFilterTitle={setFilterTitle}/>
            <MainBodySection filterLocation={filterLocation} filterTitle={filterTitle}/>
        </div>
    )
}

export default Layout