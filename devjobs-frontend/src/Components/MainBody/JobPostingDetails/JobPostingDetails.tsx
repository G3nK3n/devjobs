import { Container, Box, Button, Card, CardBody, Image, Stack, Heading, Text, CardFooter} from "@chakra-ui/react"
import {
    List,
    ListItem,
    ListIcon,
    OrderedList,
    UnorderedList,
  } from '@chakra-ui/react'

import classes from './JobPostingDetails.module.css';

import ScootLogo from '../../../logos/scoot.svg'
import BlogrLogo from '../../../logos/blogr.svg'
import CoffeeRoastersLogo from '../../../logos/coffeeroasters.svg'
import CreativeLogo from '../../../logos/creative.svg'
import CrowdFundLogo from '../../../logos/crowdfund.svg'
import MakerLogo from '../../../logos/maker.svg'
import MastercraftLogo from '../../../logos/mastercraft.svg'
import OfficeLiteLogo from '../../../logos/officelite.svg'
import PodLogo from '../../../logos/pod.svg'
import PomodoroLogo from '../../../logos/pomodoro.svg'
import TypemasterLogo from '../../../logos/typemaster.svg'
import VectorLogo from '../../../logos/vector.svg'


const JobPostingDetails = () => {
    
    const tempText = '5+ years of industry experience in a software engineering role, preferably building a SaaS product.You can demonstrate significant impact that your work has had on the product and/or the team.Experience with scalable distributed systems, both built from scratch as well as on AWS primitives.Extremely data-driven.Ability to debug complex systems.';
    const tempText2 = 'This role is for someone who is excited about the early stage - you will be responsible for turning the platform vision into reality through smart, efficient building and testing.Translate the product roadmap into engineering requirements and own the engineering roadmap.Work with limited resources to test and learn as efficiently as possible, while laying the framework to build a more scalable product over time.Collaborate with product, design, and external engineering teammates as needed.';

    const showRequirmentList = () => {
        let tempArray = tempText.split('.').filter(x => x)
        console.log("The array: " , tempArray)
        return tempArray
    }

    const showRolesList = () => {
        let tempArray = tempText2.split('.').filter(x => x)
        return tempArray
    }

    return(
        <Box>
            <Container maxW={'730px'}>
                {/* Top card */}
                <Card direction={{ base: 'column', sm: 'row' }}>
                <Image boxShadow={'xl'} src={ScootLogo} bgColor={'#E99210'} padding={'58px 30px'} width="140px" height="140px"/> 
                    <Stack>
                        <CardBody ml='20px' mt='18px'>
                            <Heading fontFamily={'Kumbh Sans, sans-serif'} fontSize={24} size='md'>Scoot</Heading>
                            <Text fontSize={16} fontFamily={'Manrope, sans-serif'} color={'#6E8098'} py={2}>  
                                scoot.com 
                            </Text>
                            
                        </CardBody>
                    </Stack>
                    <Box ml='200px' mt='50px'>
                        <Button 
                            marginLeft={30} 
                            bgColor={'rgb(89, 100, 224, 0.1)'}
                            color={'rgb(89, 100, 224)'} 
                            fontSize={14} 
                            fontWeight={600}  
                            fontFamily={'Kumbh Sans, sans-serif'}
                            _hover={{bgColor: '#939BF4', borderColor: '#939BF4'}}
                            >
                                Company Site  
                        </Button>
                    </Box> 
                </Card>

                {/* This is the main body section for the Job Details */}
                <Card mt={'50px'} paddingBottom={'20px'}>
                    <Stack>
                        <CardBody>
                            <Text fontSize={16} fontFamily={'Manrope, sans-serif'} color={'#6E8098'} py={2}>
                                1w ago - Part Time
                            </Text>
                            <Heading fontFamily={'Kumbh Sans, sans-serif'} fontSize={24} size='md'>Senior Software Engineer</Heading>
                            <Text fontSize={14} fontWeight={700} fontFamily={'Kumbh Sans. sans-serif'} color={'#5964E0'} py={1}>
                                United Kingdom
                            </Text>
                        </CardBody>
                    </Stack>
                    <Box ml='480px' mt='-80px'>
                        <Button 
                            marginLeft={30} 
                            bgColor={'#5964E0'} 
                            color={'white'}
                            fontSize={14}
                            padding={'0px 26px'}
                            fontFamily={'Manrope, sans-serif'}
                            _hover={{bgColor: '#939BF4', borderColor: '#939BF4'}}>
                                Apply Now 
                        </Button>
                    </Box>
                    <CardBody>
                        <Text fontSize={16} fontFamily={'Manrope, sans-serif'} color={'#6E8098'} py={2} mt={'40px'}>
                            Scoot is looking for a Senior Software Engineer passionate about building approachable, innovative and user-first experiences to join our small but
                            growing Engineering team. You will be responsible for building and maintaining front end functionality across all of Scoot's applications, 
                            fostering a growing team of software engineers, and helping drive and maintain best software patterns and practices in our codebase. 
                        </Text>
                        <Heading mt={'40px'} fontFamily={'Kumbh Sans, sans-serif'} fontSize={20} size='sm'>Requirements</Heading>
                        <Text fontSize={16} fontFamily={'Manrope, sans-serif'} color={'#6E8098'} py={2} mt={'20px'}>
                            The ideal candidate is as passionate about solving challenges through technology. 
                            They are well-versed in building proof of concepts from scratch and taking these POCs to production and scale. 
                            The right fit will have the engineering experience to build and iterate quickly and is comfortable working with product 
                            and design to set the technical strategy and roadmap. 
                        </Text>
                        <UnorderedList mt={'20px'}>
                        {
                            showRequirmentList().map((items) => {
                                return(
                                    <ListItem fontSize={15} fontFamily={'Manrope, sans-serif'} color={'#6E8098'} py={2} mt={'10px'}>
                                        {items}
                                    </ListItem>
                                )
                            })
                        }
                        </UnorderedList>
                        <Heading mt={'40px'} fontFamily={'Kumbh Sans, sans-serif'} fontSize={20} size='sm'>What You Will Do</Heading>
                        <Text fontSize={16} fontFamily={'Manrope, sans-serif'} color={'#6E8098'} py={2} mt={'20px'}>
                            We are looking for a Senior Software Engineer to join as one of our first hires. As we iterate on our MVP, you will have the opportunity 
                            to drive the vision and own the build behind our digital experience. You'll have the support of an experienced technical advisor, a Head of Product, 
                            and an external team to work with. 
                        </Text>
                        <OrderedList mt={'20px'}>
                        {
                            showRolesList().map((items) => {
                                return(
                                    <ListItem fontSize={15} fontFamily={'Manrope, sans-serif'} color={'#6E8098'} py={2} mt={'10px'}>
                                        {items}
                                    </ListItem>
                                )
                            })
                        }
                        </OrderedList>
                    </CardBody>
                </Card>
            </Container>
            <Card mt={'80px '} borderRadius={'0px'} direction={{ base: 'column', sm: 'row' }}>
                <Container maxW={'730px'}>
                    <CardFooter padding={'0px'} paddingTop={'23px'} paddingBottom={'10px'}>
                        <Stack>
                            <Heading fontFamily={'Kumbh Sans, sans-serif'} fontSize={20} size='sm'>Senior Software Engineer</Heading>
                            <Text fontSize={16} fontFamily={'Manrope, sans-serif'} color={'#6E8098'} py={1}>
                                Scoot 
                            </Text>
                        </Stack>
                    <Box ml='230px' mt='7px'>
                    <Button 
                        marginLeft={30} 
                        bgColor={'#5964E0'} 
                        color={'white'}
                        fontSize={14}
                        padding={'0px 26px'}
                        fontFamily={'Manrope, sans-serif'}
                        _hover={{bgColor: '#939BF4', borderColor: '#939BF4'}}>
                            Apply Now
                    </Button>
                    </Box> 
                    </CardFooter>
                </Container>
            </Card>
        </Box>
    )
}

export default JobPostingDetails