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

export default function Vidfy() {
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
              'ExpediaClone.png'
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
            Expedia Clone
          </Heading>
         
          <Text
            textAlign={'center'}
            color={useColorModeValue('gray.700', 'gray.400')}
            px={3}>
            Expedia Group, Inc. is an American online travel shopping company for consumer and small business travel.
            Great Deals for Flights, Hotels & More. View Verified Customer Reviews on Expedia.co.in. Get the Most Out of Your Holiday with Packages. Explore Fun Things to Do On Your Stay. Secure Booking. Expedia's Best Prices
          </Text>
          <Stack align={'center'} justify={'center'} direction={'row'} mt={6}>
            <Badge
              px={2}
              py={1}
              bg={useColorModeValue('gray.50', 'gray.800')}
              fontWeight={'400'}>
              #HTML
            </Badge>
            <Badge
              px={2}
              py={1}
              bg={useColorModeValue('gray.50', 'gray.800')}
              fontWeight={'400'}>
              #CSS
            </Badge>
            <Badge
              px={2}
              py={1}
              bg={useColorModeValue('gray.50', 'gray.800')}
              fontWeight={'400'}>
              #JAVASCRIPT
            </Badge>
          </Stack>

          <Stack
            width={'100%'}
            mt={'2rem'}
            direction={'row'}
            padding={2}
            justifyContent={'space-around'}
            alignItems={'center'}>
            <a href='https://github.com/vishnu9651/Expedia-clone' target="_blank">
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
            <a href='https://expedia-travels-clone.netlify.app/' target="_blank">
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

