import {
    Button,
    Flex,
    Heading,
    Image,
    Stack,
    Text,
    useBreakpointValue,
  } from '@chakra-ui/react';
  
  export default function Home() {
    return (
      <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
        <Flex p={8} flex={1} align={'center'} justify={'center'}>
          <Stack spacing={6} w={'full'} maxW={'lg'}>
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
                Full Stack Web Developer
              </Text>{' '}
            </Heading>
            <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
            An ambitious software engineer with strong command in React, Javascript, JQuery, HTML,CSS,NodeJs, MongoDb, and DSA. Constant learner and ability to adapt to new technologies. Possess strong communication and team management skills. 


            </Text>
            <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
              
              
            </Stack>
          </Stack>
        </Flex>
        <Flex flex={1}>
          <Image
            alt={'Login Image'}
            boxSize='400px'
            borderRadius='full'
            marginTop="99px"
            src={
              'img1.png'
            }
          />
        </Flex>
      </Stack>
    );
  }