import { Container, Box, Button, Card, CardBody, Image, Stack, Heading, Text, CardFooter} from "@chakra-ui/react"
import {
    List,
    ListItem,
    ListIcon,
    OrderedList,
    UnorderedList,
  } from '@chakra-ui/react'
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"




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

//If params is equal to the database data, then show specific data
//Make a getRequest in thisd page and make a filter according to the parameters, which includes the companyID
const JobPostingDetails = () => {

    const url = "http://localhost:5000/";
    const [data, setData] = useState([]);
    let {companyID} = useParams();

    const getRequest = async () => {
        try {
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            await response.json().then(theData => {
                setData(theData.recordset.recordset)
            });
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getRequest();
    }, [])

    const filteredData = (theData: any) => {

        let theFilteredData;
        
        theFilteredData = theData.filter((items: any) => {

            return items.Company_ID === Number(companyID)
        })
        return theFilteredData[0];
    }

    const showImages = () => { 
        if(filteredData(data)?.Company_Name.includes('Scoot')) {
            return(<Image boxShadow={'xl'} src={ScootLogo} bgColor={'#E99210'} padding={'58px 30px'} width="140px" height="140px"/>)
        }
        else if(filteredData(data)?.Company_Name.includes('Blogr')) {
            return(<Image boxShadow={'xl'} src={BlogrLogo} bgColor={'#E54D25'} padding={'49px 30px'} width="140px" height="140px"/>)
        }
        else if(filteredData(data)?.Company_Name.includes('Vector')) {
            return(<Image boxShadow={'xl'} src={VectorLogo} bgColor={'#34353F'} padding={'60px 15px'} width="140px" height="140px"/>)
        }
        else if(filteredData(data)?.Company_Name.includes('Office Lite')) {
            return(<Image boxShadow={'xl'} src={OfficeLiteLogo} bgColor={'#5175FF'} padding={'58px 30px'} width="225px" height="156px"/>) 
        }
        else if(filteredData(data)?.Company_Name.includes('Pod')) {
            return(<Image boxShadow={'xl'} src={PodLogo} bgColor={'#132034'} padding={'44px 30px'} width="140px" height="140px"/>)
        }
        else if(filteredData(data)?.Company_Name.includes('Creative')) {
            return(<Image boxShadow={'xl'} src={CreativeLogo} bgColor={'#4E1853'} padding={'48px 30px'} width="140px" height="140px"/>)
        }
        else if(filteredData(data)?.Company_Name.includes('Pomodoro')) {
            return(<Image boxShadow={'xl'} src={PomodoroLogo} bgColor={'#4722C6'} padding={'58px 30px'} width="140px" height="140px"/>)
        }
        else if(filteredData(data)?.Company_Name.includes('Maker')) {
            return(<Image boxShadow={'xl'} src={MakerLogo} bgColor={'#21427D'} padding={'45px 30px'} width="140px" height="140px"/>)
        }
        else if(filteredData(data)?.Company_Name.includes('Coffeeroasters')) {
            return(<Image boxShadow={'xl'} src={CoffeeRoastersLogo} bgColor={'#F2DECB'} padding={'49px 30px'} width="140px" height="140px"/>)
        }
        else if(filteredData(data)?.Company_Name.includes('Mastercraft')) {
            return(<Image boxShadow={'xl'} src={MastercraftLogo} bgColor={'#1F1F1F'} padding={'47px 30px'} width="140px" height="140px"/>)
        }
        else if(filteredData(data)?.Company_Name.includes('Crowdfund')) {
            return(<Image boxShadow={'xl'} src={CrowdFundLogo} bgColor={'#37C790'} padding={'58px 10px'} width="140px" height="140px"/>)
        }
        else if(filteredData(data)?.Company_Name.includes('Typemaster')) { 
            return(<Image boxShadow={'xl'} src={TypemasterLogo} bgColor={'#F16718'} padding={'58px 30px'} width="140px" height="140px"/>) 
        }
    }

    return(
        <Box marginTop={'-37px'}>
            <Container maxW={'730px'}>
                {/* Top card */}

                <Card direction={{ base: 'column', sm: 'row' }}>
                    {showImages()} 
                    <Stack>
                        <CardBody ml='20px' mt='18px'>
                            <Heading fontFamily={'Kumbh Sans, sans-serif'} fontSize={24} size='md'>{filteredData(data)?.Company_Name}</Heading>
                            <Text fontSize={16} fontFamily={'Manrope, sans-serif'} color={'#6E8098'} py={2}>
                                {filteredData(data)?.Job_Link.split("/")[1] + '.com'} 
                            </Text>
                        </CardBody>
                        
                    </Stack>
                    <Box width={'100%'}>
                        <Box position={'absolute'} right={'63px'} top={'50px'}> 
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
                    </Box>
                </Card>

                {/* This is the main body section for the Job Details */}
                <Card mt={'50px'} paddingBottom={'20px'}>
                    <Stack>
                        <CardBody>
                            <Text fontSize={16} fontFamily={'Manrope, sans-serif'} color={'#6E8098'} py={2}>
                                {filteredData(data)?.PostedAt + " - " + filteredData(data)?.Job_Contract}
                            </Text>
                            <Heading fontFamily={'Kumbh Sans, sans-serif'} fontSize={24} size='md'>{filteredData(data)?.Position}</Heading>
                            <Text fontSize={14} fontWeight={700} fontFamily={'Kumbh Sans. sans-serif'} color={'#5964E0'} py={1}>
                                {filteredData(data)?.Job_Location}
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
                            {filteredData(data)?.Job_Description}
                        </Text>
                        <Heading mt={'40px'} fontFamily={'Kumbh Sans, sans-serif'} fontSize={20} size='sm'>Requirements</Heading>
                        <Text fontSize={16} fontFamily={'Manrope, sans-serif'} color={'#6E8098'} py={2} mt={'20px'}>
                            {filteredData(data)?.Requirement_Content}
                        </Text>
                        <UnorderedList mt={'20px'}>
                        {
                            filteredData(data)?.RequirementList.split(".").filter((x: any) => x).map((items: any) => {
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
                            {filteredData(data)?.Roles_Content}
                        </Text>
                        <OrderedList mt={'20px'}>
                        {
                            filteredData(data)?.RolesList.split(".").filter((x: any) => x).map((items: any) => {
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
                            <Heading fontFamily={'Kumbh Sans, sans-serif'} fontSize={20} size='sm'>{filteredData(data)?.Position}</Heading>
                            <Text fontSize={16} fontFamily={'Manrope, sans-serif'} color={'#6E8098'} py={1}>
                                {filteredData(data)?.Company_Name}

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