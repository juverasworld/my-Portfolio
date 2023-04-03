// import {
//   Button,
//   Flex,
//   Heading,
//   Image,
//   Stack,
//   Text,
//   useBreakpointValue,
// } from '@chakra-ui/react';

// export default function SplitScreen() {
//   return (
//     <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
//       <Flex p={8} flex={1} align={'center'} justify={'center'} z-index={20} >
//         <Stack spacing={6} w={'full'} maxW={'lg'}>
//           <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
//             <Text
//               as={'span'}
//               position={'relative'}
//               _after={{
//                 content: "''",
//                 width: 'full',
//                 height: useBreakpointValue({ base: '20%', md: '30%' }),
//                 position: 'absolute',
//                 bottom: 1,
//                 left: 0,
//                 bg: 'blue.400',
//                 zIndex: -1,
//               }}>
//               Freelance
//             </Text>
//             <br />{' '}
//             <Text color={'blue.400'} as={'span'}>
//               Design Projects
//             </Text>{' '}
//           </Heading>
//           <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
//      Hello, and welcome to my portfolio website! I'm a web developer with a passion for creating elegant, functional, and user-friendly websites. I specialize in developing websites using a variety of technologies, including HTML, CSS, JavaScript, typescript and a i'm very proficient in the use of frameworks and libraries like bootstrap css, tailwind css for styling and in addition to this i am also very proficient with the use of React library and next.js   .

// In addition to my web development skills, I'm also a blockchain content writer in my spare time. I'm passionate about the potential of blockchain technology to revolutionize industries such as finance, healthcare, and supply chain management, and I love writing about the latest developments in this exciting field.

// Whether you're looking for a new website, need help with an existing site, or just want to learn more about blockchain technology, I'm here to help. Please feel free to explore my portfolio and get in touch if you have any questions or would like to discuss your project in more detail.
//           </Text>
//           <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
//             <Button
//               rounded={'full'}
//               bg={'blue.400'}
//               color={'white'}
//               _hover={{
//                 bg: 'blue.500',
//               }}>
//               Create Project
//             </Button>
//             <Button rounded={'full'}>How It Works</Button>
//           </Stack>
//         </Stack>
//       </Flex>
//       <Flex flex={1}>
//         <Image
//           alt={'Login Image'}
//           objectFit={'cover'}
//           src={
//             '/img/logo.jpg'
//           }
//         />
//       </Flex>
//     </Stack>
//   );
// }



import {
  Flex,
  Container,
  Heading,
  Stack,
  Text,
  Button,
  Image,
} from '@chakra-ui/react';

export default function Hero() {
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
          Meeting scheduling{' '}
          <Text as={'span'} color={'orange.400'}>
            made easy
          </Text>
        </Heading>
        <Text color={'gray.500'} maxW={'3xl'}>
          Never miss a meeting. Never be late for one too. Keep track of your
          meetings and receive smart reminders in appropriate times. Read your
          smart “Daily Agenda” every morning.
        </Text>
        <Stack spacing={6} direction={'row'}>
          <Button
            rounded={'full'}
            px={6}
            colorScheme={'orange'}
            bg={'orange.400'}
            _hover={{ bg: 'orange.500' }}>
            Get started
          </Button>
          <Button rounded={'full'} px={6}>
            Learn more
          </Button>
        </Stack>
        <Flex w={'full'}>
          <Image
            alt='Login Image'
            objectFit={'cover'}
            src=
            {'/img/logo.jpg'}
            width="100%"
            height={{ sm: '24rem', lg: '30rem' }}
          //  mt={{ base: 12, sm: 16 }}
          />
          {/* <Illustration
           
          
          /> */}
        </Flex>
      </Stack>
    </Container>
  );
}

