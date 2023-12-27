import classes from './TopHeader.module.css'
import { Container } from '@chakra-ui/react'
import Headers from './Headers/Headers'

const TopHeader = () => {
    return(
        <div className={classes.headerImage}>
            <Container maxW={'1145px'}>
                <Headers />
            </Container>
        </div>
    )
}

export default TopHeader