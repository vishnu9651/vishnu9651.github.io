import myresume from "../resume/Vishnu-Upadhyay-Resume.pdf"
import {
    Button,
    Flex,
    Heading,
    IconButton,
    Image,
    Stack,
    Text,
    useBreakpointValue,
    useColorModeValue,
  } from '@chakra-ui/react';
import { BsLinkedin } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import MyComponent from '../Nametypewriter/NameTypewriter';
  
  //w={{ sm: '100%', md: '50%' }}
          
  

  export default function Home() {
  
    const handleResume=()=>{
      window.open("https://drive.google.com/file/d/1QtrL5o--fayFeddkPjSKVdYYqzrwWiux/view?usp=share_link","_blank","noopener","noreferrer")
    }
  
  
    return (
      <Stack id="home" marginTop={{base:"30px",sm:"30px",md:"0px",lg:"0px" ,xl:"0px"}} w={{base:"98%",sm:"98%",md:"98%",lg:"85%" ,xl:"80%"}} margin={"auto"} minH={'100vh'} direction={{ base: 'column', md: 'column',sm:"column",lg:"row",xl:"row"  }}>
        <Flex p={8} flex={1} align={'center'} justify={'center'}>
          <Stack spacing={6} w={{base:"98%",sm:"98%",md:"98%",lg:"full" ,xl:"full"}}>
            <Heading fontSize={{ base: '3xl',sm:"3xl", md: '4xl', lg: '5xl' }}>
              <Text
                >
                Hi I am Vishnu
              </Text>
              <br />{' '}
              <Text color={'blue.400'} as={'span'}>
                <MyComponent />
              </Text>{' '}
            </Heading>
            <Text fontSize={{ base: '1xl',md:"2xl", lg: 'xl',xl:"xl" }} color={'gray.500'}>
            An ambitious software engineer with strong command in React, Javascript, JQuery, HTML,CSS,NodeJs, MongoDb, and DSA. Constant learner and ability to adapt to new technologies. Possess strong communication and team management skills. 
            </Text>

            <Stack direction={{ base: 'column', md: 'row' }} spacing={4} marginLeft={{base: '10%', lg: '20px'}} display={"flex"} justifyContent={"center"}>
            <a  href={myresume} onClick={handleResume} download target="_blank" rel="noopener noreferrer">
          <Button
          onclick={()=>handleResume}
            // href={'https://drive.google.com/file/d/1QtrL5o--fayFeddkPjSKVdYYqzrwWiux/view?usp=share_link'}
            as={'a'}
          
            border={"2px solid skyBlue"}
            p={"10px"}
            fontSize={'md'}
            bg={"blue.400"}
            fontWeight={700}
            marginLeft={4}
        _hover={{bg:"transparent"}}
            download
      textDecoration={"none"}
      >
            Resume
          </Button>
          </a> 
            </Stack>
          </Stack>
        </Flex>
        <Flex flex={1}>
          <Image
            alt={'Login Image'}
            boxSize='400px'
            borderRadius='full'
            marginTop={{base:"50px",sm:"20px",md:"20px",lg:"99px" ,xl:"99px"}}
            marginLeft={{base:"0%",sm:"25%",md:"25%",lg:"0%" ,xl:"0%"}}
            src={
              'img3.png'
            }
          />
        </Flex>
      </Stack>
    );
  }
  // <Button onClick={toggleColorMode} border={'4px solid lightblue'}>
  //           {colorMode === 'dark' ? <SunIcon /> : <MoonIcon /> }
       
  //         </Button>