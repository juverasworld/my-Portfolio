import {
    Flex,
    Container,
    Heading,
    Stack,
    Text,
    Button,
    Image,
  } from '@chakra-ui/react';
  
  export default function Main() {
    return (
      <Container maxW={'5xl'}>
        <Stack
          textAlign={'center'}
          align={'center'}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 20, md: 28 }}>
          <Heading
            fontWeight={600}
            fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
            lineHeight={'110%'}>
           Hello, welcome to my {' '}
            <Text as={'span'} color={'orange.400'}>
            portfolio website!
            </Text>
          </Heading>
          <Text color={'gray.500'} maxW={'3xl'}>
           I am a web developer with a passion for creating elegant, functional, and user-friendly websites. I specialize in developing websites using a variety of technologies, including HTML, CSS, JavaScript, typescript and a I am very proficient in the use of frameworks and libraries like bootstrap css, tailwind css for styling and in addition to this i am also very proficient with the use of React library and next.js.
          </Text>
          <Stack spacing={6} direction={'row'}>
            <Button
              rounded={'full'}
              px={6}
              colorScheme={'orange'}
              bg={'orange.400'}
              _hover={{ bg: 'orange.500' }}>
             Contact Me
            </Button>
            <Button rounded={'full'} px={6}>
              My works
            </Button>
          </Stack>
          <Flex w={'full'}>
            <Image
              alt='Login Image'
              objectFit={'cover'}
              src=
              {'/img/logo.jpg'}
              width="100vw"
              height={{ sm: '24rem', lg: '45rem' }}
             mt={{ base: 12, sm: 16 }}
            />
            {/* <Illustration
             
            
            /> */}
          </Flex>
        </Stack>
      </Container>
    );
  }