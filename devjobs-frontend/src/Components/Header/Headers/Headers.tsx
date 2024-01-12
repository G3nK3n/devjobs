import Logo from '../../../assets/logo.svg'

import { Box } from '@chakra-ui/react'
import { Link } from 'react-router-dom';

const Headers = () => {
    return(
        <Box paddingTop={10}>
            <Link to={"/"}>
                <img src={Logo} />
            </Link>
        </Box>
    )
}

export default Headers