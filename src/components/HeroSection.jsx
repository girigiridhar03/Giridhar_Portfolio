import { Box, Button, Container, Flex, HStack, Image, Text, useTheme, VStack } from '@chakra-ui/react'
import React, { useRef } from 'react'
import { LuMoveRight } from "react-icons/lu";
import { GrDownload } from "react-icons/gr";
import profileImage from '../Assets/image3.jpg'
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

const HeroSection = () => {
    const theme = useTheme();
    const imageContainer = useRef(null);
    const name = useRef(null);
    const matterContainer = useRef(null);
    const buttonContainer = useRef(null);

    useGSAP(()=>{
        const tl = gsap.timeline();

        tl.from(imageContainer.current,{
           opacity:0,
           scale:0,
           duration:0.5,
           ease:'power1.inOut'
        });
        tl.from(imageContainer.current.children,{
          opacity:0,
          scale:0,
          duration:0.5,
           ease:'power1.inOut'
        })
        tl.from(name.current,{
          ease:'power1.inOut',
           y:10,
           duration:0.5,
           opacity:0
        })
        tl.from(matterContainer.current.children,{
           y:20,
           duration:0.3,
           stagger:0.3,
           opacity:0
        })
        tl.from(buttonContainer.current.children,{
           opacity:0,
           scale:0,
           duration:0.3,
           stagger:0.3
        });



        return () => tl.kill();
    },[])


  return (
    <Box w={'100%'} h={'100vh'} id='home'>
        <Container w={['100%']} h={'100%'} maxW={'1500px'} mx={'auto'}>
            <Flex  w={'100%'} h={'100%'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'} gap={['1.5rem','1.8rem','1.8rem','1.8rem','2rem']}>
                <VStack>
                <Box ref={imageContainer} w={['120px','120px','130px','130px','150px']} h={['120px','120px','130px','130px','150px']} borderRadius={'50%'} overflow={'hidden'} border={`5px solid ${theme.colors.primaryColor}`} p={1}>
                    <Image w={'100%'} h={'100%'} objectFit={'cover'} borderRadius={'50%'} src={profileImage} />
                </Box>

                  <Box ref={name} fontSize={['1rem','1.5rem']} fontWeight={'550'}>
                     Hi! I'm Giridhar
                  </Box>

                </VStack>
                <VStack ref={matterContainer} w={['100%','95%','90%','50%','45%']} textAlign={'center'} gap={'1.5rem'}>
                     <Box fontSize={['2.8rem','3.2rem','3.5rem']} fontWeight={'500'} lineHeight={['2.7rem','2.8rem','3.8rem']}>
                     frontend web developer.
                     </Box>
                      <Text fontWeight={'500'} fontSize={['1rem']} lineHeight={['1.7rem','1.9rem']}>
                      I’m a frontend developer dedicated to building intuitive and beautiful web interfaces. Explore my portfolio to see a range of projects where I bring creativity and technical expertise together, transforming ideas into seamless user experiences.
                      </Text>
                </VStack>
                <HStack flexDirection={['column','column','row']} ref={buttonContainer} gap={'1rem'}>
                   <Box>
                      <Button display={'flex'} alignItems={'center'} gap={'0.5rem'} size={'lg'} borderRadius={'30px'} letterSpacing={'0.1rem'} _hover={{bgColor:'#9370DB'}} bgColor={theme.colors.primaryColor} fontSize={'0.9rem'} color={'white'} fontFamily={theme.fonts.heading}>
                         contact me <Box><LuMoveRight /></Box>
                      </Button>

                   </Box>
                    <Box>
                      <Button display={'flex'} alignItems={'center'} gap={'0.5rem'} size={'lg'} borderRadius={'30px'} letterSpacing={'0.1rem'} variant={'outline'}  fontSize={'0.9rem'} opacity={'0.8'} color={'black'} border={'1px solid black'} fontFamily={theme.fonts.heading}  _hover={{bgColor:theme.colors.lightColor}}>
                         my resume <Box><GrDownload /></Box>
                      </Button>
                    </Box>
                </HStack>
            </Flex>
        </Container>
    </Box>
  )
}

export default HeroSection
