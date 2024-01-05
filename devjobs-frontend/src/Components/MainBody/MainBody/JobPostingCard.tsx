import { Image, Card, CardBody, CardFooter, Text } from "@chakra-ui/react"

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


interface Props {
    theData: any
}

const JobPostingCard: React.FC<Props> = ({theData}) => {
    
    const showImages = () => {
        if(theData.Company_Name === 'Scoot') {
            return(<Image boxShadow={'xl'} src={ScootLogo} bgColor={'#E99210'} padding={'20px 5px'} borderRadius={15} width="50px" marginLeft={'18px'} marginTop={'-28px'}/>)
        }
        else if(theData.Company_Name === 'Blogr') {
            return(<Image boxShadow={'xl'} src={BlogrLogo} bgColor={'#E54D25'} padding={'19px 16px'} borderRadius={15} width="50px" marginLeft={'18px'} marginTop={'-28px'}/>)
        }
        else if(theData.Company_Name === 'Vector') {
            return(<Image boxShadow={'xl'} src={VectorLogo} bgColor={'#34353F'} padding={'25px 5px'} borderRadius={15} width="50px" marginLeft={'18px'} marginTop={'-28px'}/>)
        }
        else if(theData.Company_Name === 'Office Lite') {
            return(<Image boxShadow={'xl'} src={OfficeLiteLogo} bgColor={'#5175FF'} padding={'20px 10px'} borderRadius={15} width="50px" marginLeft={'18px'} marginTop={'-28px'}/>)
        }
        else if(theData.Company_Name === 'Pod') {
            return(<Image boxShadow={'xl'} src={PodLogo} bgColor={'#132034'} padding={'15px 11px'} borderRadius={15} width="55px" marginLeft={'18px'} marginTop={'-28px'}/>)
        }
        else if(theData.Company_Name === 'Creative') {
            return(<Image boxShadow={'xl'} src={CreativeLogo} bgColor={'#4E1853'} padding={'15px 11px'} borderRadius={15} width="55px" marginLeft={'18px'} marginTop={'-28px'}/>)
        }
        else if(theData.Company_Name === 'Pomodoro') {
            return(<Image boxShadow={'xl'} src={PomodoroLogo} bgColor={'#4722C6'} padding={'20px 5px'} borderRadius={15} width="50px" marginLeft={'18px'} marginTop={'-28px'}/>)
        }
        else if(theData.Company_Name === 'Maker') {
            return(<Image boxShadow={'xl'} src={MakerLogo} bgColor={'#21427D'} padding={'15px 11px'} borderRadius={15} width="55px" marginLeft={'18px'} marginTop={'-28px'}/>)
        }
        else if(theData.Company_Name === 'Coffeeroasters') {
            return(<Image boxShadow={'xl'} src={CoffeeRoastersLogo} bgColor={'#F2DECB'} padding={'15px 11px'} borderRadius={15} width="55px" marginLeft={'18px'} marginTop={'-28px'}/>)
        }
        else if(theData.Company_Name === 'Mastercraft') {
            return(<Image boxShadow={'xl'} src={MastercraftLogo} bgColor={'#1F1F1F'} padding={'15px 11px'} borderRadius={15} width="55px" marginLeft={'18px'} marginTop={'-28px'}/>)
        }
        else if(theData.Company_Name === 'Crowdfund') {
            return(<Image boxShadow={'xl'} src={CrowdFundLogo} bgColor={'#37C790'} padding={'20px 5px'} borderRadius={15} width="50px" marginLeft={'18px'} marginTop={'-28px'}/>)
        }
        else if(theData.Company_Name === 'Typemaster') {
            return(<Image boxShadow={'xl'} src={TypemasterLogo} bgColor={'#F16718'} padding={'15px 11px'} borderRadius={15} width="55px" marginLeft={'18px'} marginTop={'-28px'}/>)
        }
    }
    
    return(
        <Card maxW={'sm'} marginBottom={50}>
            
            {showImages()}
            <CardBody>
                <Text fontSize={14} fontFamily={'Manrope, sans-serif'} color={'#6E8098'} py={1} display={'inline-block'}>
                    {theData.PostedAt} - {theData.Job_Contract}
                </Text>

                <a href="#">
                <Text fontFamily={'Kumbh Sans, sans-serif'} fontWeight={600} fontSize={20} color={'#19202D'} py={1}>
                    {theData.Position}
                </Text>
                </a> 
                
                <Text fontSize={14} fontFamily={'Manrope, sans-serif'} color={'#6E8098'} py={1}>
                    {theData.Company_Name}
                </Text>
            </CardBody>
            <CardFooter>
                <Text fontSize={14} fontWeight={700} fontFamily={'Kumbh Sans. sans-serif'} color={'#5964E0'} py={1}>
                    {theData.Job_Location}
                </Text>
            </CardFooter>
        </Card>
    )
}

export default JobPostingCard