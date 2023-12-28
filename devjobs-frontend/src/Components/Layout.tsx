import TopHeader from './Header/TopHeader'
import SearchBar from './MainBody/SearchBox/SearchBar'
import MainBodySection from './MainBody/MainBody/MainBodySection'

import classes from './Layout.module.css'

const Layout = () => {
    return(
        <div className={classes.Layout}>
            <TopHeader />
            <SearchBar />
            <MainBodySection />
        </div>
    )
}

export default Layout