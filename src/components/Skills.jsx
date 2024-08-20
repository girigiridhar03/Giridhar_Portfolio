import { Box, IconButton, SimpleGrid, VStack } from "@chakra-ui/react";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoCodeSlash } from "react-icons/io5";
import { RiReactjsLine } from "react-icons/ri";
import { FaJsSquare } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { RiNextjsFill } from "react-icons/ri";
import { SiChakraui } from "react-icons/si";
import React from "react";
import theme from "../theme";

const Skills = () => {
  return (
    <Box id="skills" w={"100%"} h={'auto'} maxW={"1500px"} mx={"auto"} my={"5rem"}>
      <VStack w={"100%"} textAlign={'center'}>
        <Box color={theme.colors.primaryColor} fontSize={"5rem"}>
          <IoCodeSlash />
        </Box>
        <Box fontSize={["2.3rem",'2.5rem']} fontWeight={"600"}>
          Skills And Technologies
        </Box>
      </VStack>

      <SimpleGrid w={['90%']} mx={'auto'} columns={[2,3,3,4]} spacing={10} my={'3rem'}>
        <IconButton
          colorScheme="purple"
          icon={<FaHtml5 />}
           height={'150px'}
           width={['100%']}
           mx={'auto'}
           fontSize={"5rem"}
        />
        <IconButton
            height={'150px'}
           width={['100%']}
           mx={'auto'}
          colorScheme="purple"
          icon={ <FaCss3Alt />}
           
          fontSize={"5rem"}
        />
        <IconButton
            height={'150px'}
           width={['100%']}
           mx={'auto'}
          colorScheme="purple"
          icon={  <FaJsSquare />}
           
          fontSize={"5rem"}
        />
        <IconButton
            height={'150px'}
           width={['100%']}
           mx={'auto'}
          colorScheme="purple"
          icon={ <RiReactjsLine />}
           
          fontSize={"5rem"}
        />
         <IconButton
            height={'150px'}
           width={['100%']}
           mx={'auto'}
          colorScheme="purple"
          icon={<RiNextjsFill />}
           
          fontSize={"5rem"}
        />
         <IconButton
            height={'150px'}
           width={['100%']}
           mx={'auto'}
          colorScheme="purple"
          icon={ <SiRedux />}
           
          fontSize={"5rem"}
        />
         <IconButton
            height={'150px'}
           width={['100%']}
           mx={'auto'}
          colorScheme="purple"
          icon={ <SiChakraui />}
           
          fontSize={"5rem"}
        />
        <IconButton
            height={'150px'}
           width={['100%']}
           mx={'auto'}
          colorScheme="purple"
          icon={ <RiTailwindCssFill />}
           
          fontSize={"5rem"}
        />
       
       
       
      </SimpleGrid>
    </Box>
  );
};

export default Skills;
