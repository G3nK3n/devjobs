import { Container, Stack, InputGroup, Input, Checkbox, useColorModeValue } from '@chakra-ui/react'
import SearchIcon from '../../../assets/icon-search.svg'
import LocationIcon from '../../../assets/icon-location.svg'

interface SearchBarProps {
    setFilterTitle: Function;
    setFilterLocation: Function;
    setFilterPosition: Function;
}


const SearchBar: React.FC<SearchBarProps> = ({setFilterTitle, setFilterLocation, setFilterPosition}) => {
    
    const filterTitleChanges = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFilterTitle(e.target.value);
    }

    const filterLocationChanges = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFilterLocation(e.target.value);
    }

    const filterPositionChanges = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFilterPosition(e.target.checked)
    }

    const backgroundColor = useColorModeValue('white', '#19202D');
    const fullTimeColor = useColorModeValue('black', 'white');
    const searchBarPlaceholderColor = useColorModeValue('rgba(25, 32, 45, 0.5)','rgba(255, 255, 255, 0.5)')
    
    return(
        <div>
            <Container maxW={'1145px'}>
                <Stack marginTop={-37}>
                    <InputGroup>
                        <Input bgSize={'24px 24px'} bgImage={SearchIcon} bgPosition={'35px 28px'} 
                            padding={'37px 72px'} bgRepeat='no-repeat'
                            placeholder='Filter by title, companies, expertise...'
                            _placeholder={{color: searchBarPlaceholderColor}}
                            width={550}
                            bgColor={backgroundColor}
                            fontFamily={'Kumbh Sans, sans-serif'}
                            fontSize={14}
                            borderLeftRadius={6}
                            borderRightRadius={0}
                            border={'none'}
                            onChange={filterTitleChanges}
                            cursor={'pointer'}
                            />
                        <Input bgSize={'17px 24px'} bgImage={LocationIcon} bgPosition={'35px 28px'} 
                            padding={'37px 72px'} bgRepeat='no-repeat'
                            placeholder='Filter by location...'
                            _placeholder={{color: searchBarPlaceholderColor}}
                            width={450}
                            bgColor={backgroundColor}
                            fontFamily={'Kumbh Sans, sans-serif'}
                            fontSize={14}
                            borderLeftRadius={0}
                            borderRightRadius={0}
                            borderTop={'none'}
                            borderBottom={'none'}
                            cursor={'pointer'}
                            onChange={filterLocationChanges}
                            />
                        <Checkbox 
                            backgroundColor={backgroundColor}
                            width={400}
                            paddingLeft={'30'}
                            borderLeftRadius={0}
                            height={75}
                            fontFamily={'Kumbh Sans, sans-serif'}
                            color={fullTimeColor}
                            fontWeight={600}
                            cursor={'pointer'}
                            onChange={filterPositionChanges}>
                                Full Time Only
                                {/* <Button 
                                    marginLeft={30} 
                                    bgColor={'#5964E0'} 
                                    color={'white'}
                                    fontSize={14}
                                    fontFamily={'Manrope, sans-serif'}
                                    _hover={{bgColor: '#939BF4', borderColor: '#939BF4'}}>
                                        Search
                                </Button> */}
                        </Checkbox>  
                    </InputGroup>
                </Stack>
            </Container>
        </div>
    )
}

export default SearchBar