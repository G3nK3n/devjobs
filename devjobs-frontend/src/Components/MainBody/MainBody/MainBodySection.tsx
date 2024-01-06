import { useEffect, useState } from "react";
import JobPostingCard from "./JobPostingCard"
import { Container, Box, SimpleGrid, Button } from "@chakra-ui/react"

interface MainBodyProps {
    filterTitle: string;
    filterLocation: string;
    filterPosition: boolean;
}


const MainBodySection: React.FC<MainBodyProps> = ({filterTitle, filterLocation, filterPosition}) => {

    const url = "http://localhost:5000/";
    const [data, setData] = useState([]);
    const [next, setNext] = useState(6);

    const handleMoreJobs = () => {
        setNext(next + 6);
    }

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

    const filteredData = (theData: any) => {
        
        let theFilteredData;

        console.log("Is it checked: ", filterPosition)

        if(filterTitle.trim() != "" && filterLocation.trim() == "") {
            theFilteredData = theData.filter((items:any) => {
                //Use this one for strings?
                return items.Position.includes(filterTitle)
            })
        }
        else if(filterTitle.trim() != "" && filterLocation.trim() == "" && filterPosition == true) {
            theFilteredData = theData.filter((items:any) => {
                //Use this one for strings?
                return items.Position.includes(filterTitle) && items.Job_Contract.includes("Full Time")
            })
        }
        else if(filterTitle.trim() == "" && filterLocation.trim() != "") {
            theFilteredData = theData.filter((items:any) => {
                //Use this one for strings?
                return items.Job_Location.includes(filterLocation)
            })
        }
        else if(filterTitle.trim() == "" && filterLocation.trim() != "" && filterPosition == true) {
            theFilteredData = theData.filter((items:any) => {
                //Use this one for strings?
                return items.Job_Location.includes(filterLocation) && items.Job_Contract.includes("Full Time")
            })
        }
        else if (filterTitle.trim() != "" && filterLocation.trim() != ""){
            theFilteredData = theData.filter((items:any) => {
                //Use this one for strings?
                return items.Position.includes(filterTitle) && items.Job_Location.includes(filterLocation)
            })
        }
        else if (filterTitle.trim() != "" && filterLocation.trim() != "" && filterPosition == true){
            theFilteredData = theData.filter((items:any) => {
                //Use this one for strings?
                return items.Position.includes(filterTitle) && items.Job_Location.includes(filterLocation) && items.Job_Contract.includes("Full Time")
            })
        }
        else if (filterTitle.trim() == "" && filterLocation.trim() == "" && filterPosition == true){
            theFilteredData = theData.filter((items:any) => {
                //Use this one for strings?
                return items.Job_Contract.includes("Full Time")
            })
        }
        else if (filterTitle.trim() == "" && filterLocation.trim() == "" && filterPosition == false){
            return theFilteredData = theData;
        }

        

        return theFilteredData
    }

    useEffect(() => {
        getRequest();
    }, [])

    return(
        <Box marginTop={105} pb={'50px'}>
            <Container maxW={'1145px'}>
                <SimpleGrid spacing={8} templateColumns='repeat(auto-fill, minmax(267px, 1fr))'>
                    
                    {/* Returns the job postings according to the filtered data */}
                    {
                        filteredData(data).length > 0 && filteredData(data).slice(0, next)?.map((item: any) => {
                            return(
                                <JobPostingCard key={item.Company_ID} theData={item} />
                            )
                        })
                    }
                </SimpleGrid>
                {
                    next < filteredData(data)?.length && (
                        <Box textAlign={'center'}>
                            <Button 
                                marginLeft={30} 
                                bgColor={'#5964E0'} 
                                color={'white'}
                                fontSize={14}
                                fontFamily={'Manrope, sans-serif'}
                                _hover={{bgColor: '#939BF4', borderColor: '#939BF4'}}
                                onClick={handleMoreJobs}>
                                    Load More
                            </Button>
                        </Box>
                    )
                }
            </Container>
        </Box>
    )
}

export default MainBodySection