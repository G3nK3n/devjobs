import { Image, Card, CardBody, CardFooter, Text } from "@chakra-ui/react"

import ScootLogo from '../../../logos/scoot.svg'

const JobPostingCard = () => {
    return(
        <Card maxW={'sm'} marginBottom={50}>
            <Image boxShadow={'xl'} src={ScootLogo} bgColor={'#E99210'} padding={'20px 5px'} borderRadius={15} width="50px" marginLeft={'18px'} marginTop={'-28px'}/>
            <CardBody>
                <Text fontSize={14} fontFamily={'Manrope, sans-serif'} color={'#6E8098'} py={1} display={'inline-block'}>
                    5h ago - Full Time
                </Text>
                <Text fontFamily={'Kumbh Sans, sans-serif'} fontWeight={600} fontSize={20} color={'#19202D'} py={1}>
                    Senior Software Engineer 
                </Text>
                <Text fontSize={14} fontFamily={'Manrope, sans-serif'} color={'#6E8098'} py={1}>
                    Scoot
                </Text>
            </CardBody>
            <CardFooter>
                <Text fontSize={14} fontWeight={700} fontFamily={'Kumbh Sans. sans-serif'} color={'#5964E0'} py={1}>
                    United Kingdom
                </Text>
            </CardFooter>
        </Card>
    )
}

export default JobPostingCard