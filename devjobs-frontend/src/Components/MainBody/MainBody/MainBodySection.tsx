import { useEffect, useState } from "react";
import JobPostingCard from "./JobPostingCard"
import { Container, Box, SimpleGrid } from "@chakra-ui/react"

const MainBodySection = () => {
    
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
                console.log("The response data in: ", theData.recordset.recordset)
                setData(theData.recordset.recordset)
                console.log("The data: ", data)
            });
            // console.log("The response data in: ", responseData.recordset.recordset)
            // setData(responseData.recordset.recordset)
            // console.log("The data: ", data)
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getRequest();
    }, [])
    
    return(
        <Box marginTop={105}>
            <Container maxW={'1145px'}>
                <SimpleGrid spacing={8} templateColumns='repeat(auto-fill, minmax(267px, 1fr))'>
                    {/* <JobPostingCard theData={data}/> */}
                    { data.length > 0 && data.map((item: any) => {
                        return(
                            // <p key={item.Company_ID}>
                            //     {item.Company_Name}
                            // </p>
                            <JobPostingCard theData={item} />
                        )
                    }) }
                    {/* <JobPostingCard />
                    <JobPostingCard />
                    <JobPostingCard />
                    <JobPostingCard />
                    <JobPostingCard /> */}
                </SimpleGrid>
            </Container>
        </Box>
    )
}

export default MainBodySection