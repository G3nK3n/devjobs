import Logo from '../../../assets/logo.svg'

import { Box } from '@chakra-ui/react'

const Headers = () => {
    return(
        <Box paddingTop={10}>
            <img src={Logo} />
        </Box>
    )
}

export default Headers