import JobPostingCard from "./JobPostingCard"
import { Container, Box, SimpleGrid } from "@chakra-ui/react"

const MainBodySection = () => {
    return(
        <Box marginTop={105}>
            <Container maxW={'1145px'}>
                <SimpleGrid spacing={8} templateColumns='repeat(auto-fill, minmax(267px, 1fr))'>
                    <JobPostingCard />
                    <JobPostingCard />
                    <JobPostingCard />
                    <JobPostingCard />
                    <JobPostingCard />
                    <JobPostingCard />
                </SimpleGrid>
            </Container>
        </Box>
    )
}

export default MainBodySection