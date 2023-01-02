import {
    Button,
    Flex,
    Heading,
    Image,
    Stack,
    Text,
    useBreakpointValue,
  } from '@chakra-ui/react';
import MyComponent from '../Nametypewriter/NameTypewriter';
  
  //w={{ sm: '100%', md: '50%' }}
          
  

  export default function Home() {
    return (
      <Stack id="home" minH={'100vh'} direction={{ base: 'column', md: 'column',sm:"column",lg:"row",xl:"row"  }}>
        <Flex p={8} flex={1} align={'center'} justify={'center'}>
          <Stack spacing={6} w={{base:"98%",sm:"98%",md:"98%",lg:"full" ,xl:"full"}} maxW={'lg'}>
            <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
              <Text
                as={'span'}
                position={'relative'}
                _after={{
                  content: "''",
                  width: 'full',
                  height: useBreakpointValue({ base: '20%', md: '30%' }),
                  position: 'absolute',
                  bottom: 1,
                  color:"blue",
                  left: 0,
                  
                  zIndex: -1,
                }}>
                Hi I am Vishnu
              </Text>
              <br />{' '}
              <Text color={'blue.400'} as={'span'}>
                <MyComponent />
              </Text>{' '}
            </Heading>
            <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
            An ambitious software engineer with strong command in React, Javascript, JQuery, HTML,CSS,NodeJs, MongoDb, and DSA. Constant learner and ability to adapt to new technologies. Possess strong communication and team management skills. 
            </Text>

            <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
            <Button>Resume</Button>  
              
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
              'img1.png'
            }
          />
        </Flex>
      </Stack>
    );
  }
  // <Button onClick={toggleColorMode} border={'4px solid lightblue'}>
  //           {colorMode === 'dark' ? <SunIcon /> : <MoonIcon /> }
       
  //         </Button>