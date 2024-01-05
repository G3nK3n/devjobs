import { useEffect, useState } from "react";
import JobPostingCard from "./JobPostingCard"
import { Container, Box, SimpleGrid } from "@chakra-ui/react"

interface MainBodyProps {
    filterTitle: string;
    filterLocation: string;
}


const MainBodySection: React.FC<MainBodyProps> = ({filterTitle, filterLocation}) => {

    const url = "http://localhost:5000/";
    const [data, setData] = useState([]);

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

        if(filterTitle.trim() != "" && filterLocation.trim() == "") {
            theFilteredData = theData.filter((items:any) => {
                //Use this one for strings?
                return items.Position.includes(filterTitle)
            })
        }
        else if(filterTitle.trim() == "" && filterLocation.trim() != "") {
            theFilteredData = theData.filter((items:any) => {
                //Use this one for strings?
                return items.Job_Location.includes(filterLocation)
            })
        }
        else if (filterTitle.trim() != "" && filterLocation.trim() != ""){
            theFilteredData = theData.filter((items:any) => {
                //Use this one for strings?
                return items.Position.includes(filterTitle) && items.Job_Location.includes(filterLocation)
            })
        }
        else if (filterTitle.trim() == "" && filterLocation.trim() == ""){
            return theFilteredData = theData;
        }

        

        return theFilteredData
    }

    useEffect(() => {
        getRequest();
    }, [])

    return(
        <Box marginTop={105}>
            <Container maxW={'1145px'}>
                <SimpleGrid spacing={8} templateColumns='repeat(auto-fill, minmax(267px, 1fr))'>
                    
                    {/* Returns the job postings according to the filtered data */}
                    {
                        filteredData(data).length > 0 && filteredData(data).map((item: any) => {
                            return(
                                <JobPostingCard key={item.Company_ID} theData={item} />
                            )
                        })
                    }
                </SimpleGrid>
            </Container>
        </Box>
    )
}

export default MainBodySection