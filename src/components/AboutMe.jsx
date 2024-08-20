import React from "react";
import Me from "../Assets/Me.jpg";
import { Box, Flex, HStack, Icon, IconButton, Image, Text, VStack } from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa"; 
import { FaLinkedin } from "react-icons/fa";
import theme from "../theme";

const AboutMe = () => {
  return (
    <Box id="about" w={"100%"} mx={"auto"} maxW={"1500px"}>
      <Box textAlign={"center"} mb={['2rem']}>
        <Box fontSize={"1.3rem"} color={theme.colors.primaryColor} fontWeight={'600'}>Introduction</Box>
        <Box fontSize={["2.8rem"]} fontWeight={'600'}>About Me</Box>
      </Box>

      <Flex w={['100%','100%','100%','95%']} mx={'auto'} gap={['2rem','2rem','2rem','1rem','2rem']} flexDirection={['column','column','column','row ']}>
        <Box w={['89%','60%','60%','60%','500px']} mx={"auto"} h={['400px','500px','550px']} borderRadius={"10px"} overflow={"hidden"}>
          <Image w={"100%"} h={"100%"} objectFit={"cover"} src={Me} />
        </Box>
        <VStack w={['90%','90%','90%','90%','80%']} mx={{base:'auto',xl:'0'}} alignItems={'flex-start'} justifyContent={'space-between'} mb={['1rem']}>
          <VStack alignItems={'flex-start'}>
           <Text fontSize={['1rem','1.1rem','1.1rem','1.1rem','1.3rem']}>
           Hello! I’m [Your Name], a frontend developer dedicated to building beautiful and functional web applications.
           </Text>
          <Text fontSize={['1rem','1.1rem','1.1rem','1.1rem','1.3rem']}>
           I thrive on turning concepts into reality with clean, user-focused designs. I’m passionate about creating web experiences that are both visually appealing and easy to use.
           </Text>
          <Text fontSize={['1rem','1.1rem','1.1rem','1.1rem','1.3rem']}>
           I’m always eager to learn and grow in the field of frontend development. If you’re interested in connecting or exploring potential projects, let’s get in touch!
           </Text>
          </VStack>

          <HStack gap={['0.6rem']}>
              <IconButton
               colorScheme="purple"
               icon={<FaLinkedin />}
                size={['md','lg']} 
                fontSize={['1.1rem','1.3rem']}
               />
              <IconButton
               colorScheme="purple"
               icon={<FaGithub />}
                size={['md','lg']} 
                fontSize={['1.1rem','1.3rem']}
               />
          </HStack>

        </VStack>
      </Flex>
    </Box>
  );
};

export default AboutMe;
