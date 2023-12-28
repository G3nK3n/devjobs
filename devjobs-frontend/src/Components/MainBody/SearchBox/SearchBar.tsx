import { Container, Stack, InputGroup, Input, Checkbox, Button } from '@chakra-ui/react'
import SearchIcon from '../../../assets/icon-search.svg'
import LocationIcon from '../../../assets/icon-location.svg'

const SearchBar = () => {
    return(
        <div>
            <Container maxW={'1145px'}>
                <Stack marginTop={-37}>
                    <InputGroup>
                        <Input bgSize={'24px 24px'} bgImage={SearchIcon} bgPosition={'35px 28px'} 
                            padding={'37px 72px'} bgRepeat='no-repeat'
                            placeholder='Filter by title, companies, expertise...'
                            _placeholder={{opacity: 0.6}}
                            width={550}
                            bgColor={'white'}
                            fontFamily={'Kumbh Sans, sans-serif'}
                            fontSize={14}
                            borderLeftRadius={6}
                            borderRightRadius={0}
                            border={'none'}
                            />
                        <Input bgSize={'17px 24px'} bgImage={LocationIcon} bgPosition={'35px 28px'} 
                            padding={'37px 72px'} bgRepeat='no-repeat'
                            placeholder='Filter by location...'
                            _placeholder={{opacity: 0.6}}
                            width={450}
                            bgColor={'white'}
                            fontFamily={'Kumbh Sans, sans-serif'}
                            fontSize={14}
                            borderLeftRadius={0}
                            borderRightRadius={0}
                            borderTop={'none'}
                            borderBottom={'none'}
                            />
                        <Checkbox 
                            backgroundColor={'white'}
                            width={400}
                            paddingLeft={'30'}
                            borderLeftRadius={0}
                            height={75}
                            fontFamily={'Kumbh Sans, sans-serif'}
                            color={'#19202D'}
                            fontWeight={600}>
                                Full Time Only
                                <Button 
                                    marginLeft={30} 
                                    bgColor={'#5964E0'} 
                                    color={'white'}
                                    fontSize={14}
                                    fontFamily={'Manrope, sans-serif'}
                                    _hover={{bgColor: '#939BF4', borderColor: '#939BF4'}}>
                                        Search
                                </Button>
                        </Checkbox>  
                    </InputGroup>
                </Stack>
            </Container>
        </div>
    )
}

export default SearchBar