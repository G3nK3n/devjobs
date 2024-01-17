import Logo from '../../../assets/logo.svg'
import { Box } from '@chakra-ui/react'
import { Link } from 'react-router-dom';
import ToggleColorMode from '../../Toggle Button/ToggleColorMode';

import { FC } from 'react';


const Headers: FC = () => {
    
    
    return(
        <Box paddingTop={10}>
            <Box>
                <Link to={"/"}>
                    <img src={Logo}/>
                </Link>
                <Box float={'right'} top={'-50px'} position={'relative'}>
                    <ToggleColorMode/>
                </Box>
            </Box>
            
        </Box>
    )
}

export default Headers