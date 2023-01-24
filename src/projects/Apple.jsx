import {
  Badge,
  Button,
  Center,
  Flex,
  Heading,
  Image,
  Link,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';

export default function Apple() {
  return (
    <Center py={6}>
      <Stack
        borderWidth="1px"
        borderRadius="lg"
        w={{ sm: '100%', md: '50%',lg:"80%",xl:"80%" }}
        
        direction={{ base: 'column', md: 'column',sm:"column",lg:"row",xl:"row"  }}
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow={'2xl'}
        padding={4}>
        <Flex flex={1} bg="blue.200">
          <Image
            
            boxSize="100%"
            src={
              'Apple.jpg'
            }
          />
        </Flex>
        <Stack
          flex={1}
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          p={1}
          pt={2}>
          <Heading fontSize={'3xl'} fontFamily={'body'}>
            Apple Clone
          </Heading>
         
          <Text
            textAlign={'center'}
            color={useColorModeValue('gray.700', 'gray.400')}
            px={3}>
             Apple Inc. (formerly Apple Computer Inc.) is an American computer and consumer electronics company famous for creating the iPhone, iPad and Macintosh computers. Apple is one of the largest companies globally with a market cap of over 2 trillion dollars.
          </Text>
          <Stack align={'center'} justify={'center'} direction={'row'} mt={6}>
            <Badge
              px={2}
              py={1}
              bg={useColorModeValue('gray.50', 'gray.800')}
              fontWeight={'400'}>
              #React
            </Badge>
            <Badge
              px={2}
              py={1}
              bg={useColorModeValue('gray.50', 'gray.800')}
              fontWeight={'400'}>
              #MongoDB
            </Badge>
            <Badge
              px={2}
              py={1}
              bg={useColorModeValue('gray.50', 'gray.800')}
              fontWeight={'400'}>
              #NodeJS
            </Badge>
          </Stack>

          <Stack
            width={'100%'}
            mt={'2rem'}
            direction={'row'}
            padding={2}
            justifyContent={'space-around'}
            alignItems={'center'}>
            <a href='https://github.com/sujeetcoder/abstracted-wren-623' target="_blank">
            <Button
              flex={1}
              fontSize={'sm'}
              rounded={'full'}
              _focus={{
                bg: 'gray.200',
              }}>
              Code
            </Button>
            </a>
            <a href='https://apple0.netlify.app/' target="_blank">
            <Button
              flex={1}
              fontSize={'sm'}
              rounded={'full'}
              bg={'blue.400'}
              color={'white'}
              boxShadow={
                '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
              }
              _hover={{
                bg: 'blue.500',
              }}
              _focus={{
                bg: 'blue.500',
              }}>
              View
            </Button>
            </a>
          </Stack>
        </Stack>
      </Stack>
    </Center>
  );
}



// import {
//     Badge,
//     Button,
//     Center,
//     Flex,
//     Heading,
//     Image,
//     Link,
//     Stack,
//     Text,
//     useColorModeValue,
//   } from '@chakra-ui/react';
  
//   export default function Expedia() {
//     return (
//       <Center py={6}>
//         <Stack
//           borderWidth="1px"
//           borderRadius="lg"
//           w={{ sm: '100%', md: '50%',lg:"80%",xl:"80%" }}
          
//           direction={{ base: 'column', md: 'column',sm:"column",lg:"row",xl:"row"  }}
//           bg={useColorModeValue('white', 'gray.900')}
//           boxShadow={'2xl'}
//           padding={4}>
//           <Flex flex={1} bg="blue.200">
//             <Image
              
//               boxSize="100%"
//               src={
//                 'ExpediaClone.png'
//               }
//             />
//           </Flex>
//           <Stack
//             flex={1}
//             flexDirection="column"
//             justifyContent="center"
//             alignItems="center"
//             p={1}
//             pt={2}>
//             <Heading fontSize={'3xl'} fontFamily={'body'}>
//               Expedia Clone
//             </Heading>
            
//             <Text
//               textAlign={'center'}
//               color={useColorModeValue('gray.700', 'gray.400')}
//               px={3}>
//                 
//             </Text>
//             <Stack align={'center'} justify={'center'} direction={'row'} mt={6}>
//               <Badge
//                 px={2}
//                 py={1}
//                 bg={useColorModeValue('gray.50', 'gray.800')}
//                 fontWeight={'400'}>
//                 #JavaScript
//               </Badge>
//               <Badge
//                 px={2}
//                 py={1}
//                 bg={useColorModeValue('gray.50', 'gray.800')}
//                 fontWeight={'400'}>
//                 #html
//               </Badge>
//               <Badge
//                 px={2}
//                 py={1}
//                 bg={useColorModeValue('gray.50', 'gray.800')}
//                 fontWeight={'400'}>
//                 #Css
//               </Badge>
//             </Stack>
  
//             <Stack
//               width={'100%'}
//               mt={'2rem'}
//               direction={'row'}
//               padding={2}
//               justifyContent={'space-around'}
//               alignItems={'center'}>
//               <a href='https://github.com/vishnu9651/Expedia-clone' 
//               target="_blank">
//               <Button
//                 flex={1}
//                 fontSize={'sm'}
//                 rounded={'full'}
//                 _focus={{
//                   bg: 'gray.200',
//                 }}>
//                 Code
//               </Button>
//               </a>
//               <a href='https://expedia-travels-clone.netlify.app/' target="_blank">
//               <Button
//                 flex={1}
//                 fontSize={'sm'}
//                 rounded={'full'}
//                 bg={'blue.400'}
//                 color={'white'}
//                 boxShadow={
//                   '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
//                 }
//                 _hover={{
//                   bg: 'blue.500',
//                 }}
//                 _focus={{
//                   bg: 'blue.500',
//                 }}>
//                 View
//               </Button>
//               </a>
//             </Stack>
//           </Stack>
//         </Stack>
//       </Center>
//     );
//   }