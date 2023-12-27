import TopHeader from './Header/TopHeader'
import SearchBar from './MainBody/SearchBox/SearchBar'

import classes from './Layout.module.css'

const Layout = () => {
    return(
        <div className={classes.Layout}>
            <TopHeader />
            <SearchBar />
        </div>
    )
}

export default Layout