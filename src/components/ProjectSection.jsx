import {
  Box,
  Button,
  HStack,
  Image,
  Link,
  SimpleGrid,
  VStack,
} from "@chakra-ui/react";
import React, { useRef } from "react";
import theme from "../theme.js";
import { projects } from "./projects.js";
import { FaGithub } from "react-icons/fa";
import { FaLink } from "react-icons/fa6";
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


const ProjectSection = () => {
 
  const headingContainer = useRef(null);
  const gridContainer = useRef(null);
  const container = useRef(null);

   useGSAP(()=>{
       const tl = gsap.timeline({
        scrollTrigger:{
          trigger:container.current,
          start:'top 90%',
        }
       });

       tl.from(headingContainer.current.children,{
         y:100,
         opacity:0,
         duration:0.5,
         ease:"power1.inOut",
         stagger:0.5
       });
       
       return ()=> tl.kill();
   },[])



  return (
    <Box id="works" ref={container} w={"100%"} p={[5]} maxW={"1500px"} mx={"auto"} my={'10rem'}>
      <VStack ref={headingContainer} w={"100%"} textAlign={"center"}>
        <Box fontFamily={theme.fonts.body} fontSize={["1.1rem",'1.3rem','.1.5rem']} color={theme.colors.primaryColor} fontWeight={'600'}>
          My Portfolio
        </Box>
        <Box fontSize={["2.3rem",'2.3rem','2.5rem']} fontWeight={'600'}>My Latest Works</Box>
        <Box w={['auto','500px',"500px","600px"]} mx={'auto'} lineHeight={["1.5rem"]} fontSize={['0.9rem','1rem']}>
          Welcome to my web development portfolio! Explore a collection of
          projects showcasing my expertise in front-end development.
        </Box>
      </VStack>

      <SimpleGrid ref={gridContainer}   w={['100%','100%','100%','95%','100%']} mx={'auto'} h={'auto'}  columns={['1','1','2']} spacing={[10,10,5,5,10]} mt={"5rem"}>
        {projects.map((item) => (
          <Box
           
            bgColor={"rgb(245,247,248)"}
            overflow={"hidden"}
            borderRadius={"10px"}
            w={"100%"}
            p={[3,5]}
            backgroundPosition={"center"}
            backgroundSize={"contain"}
            bgRepeat={"no-repeat"}
            key={item.id}
            transition="transform 0.3s ease"
            _hover={{ transform: "scale(0.9)" }}
          
          >
            <Box
              w={"100%"}
              h={['200px','300px','200px','250px','400px']}
              overflow={"hidden"}
              borderRadius={"10px"}
            >
              <Image
                w={"100%"}
                h={"100%"}
                objectFit={"contain"}
                src={item.image}
              />
            </Box>
            <VStack w={"100%"} alignItems={"flex-start"} gap={['0.8rem','1rem']} mt={['0.5rem']}>
              <Box
                fontSize={['1.3rem','1.5rem']}
                fontFamily={theme.fonts.heading}
                color={theme.colors.primaryColor}
                fontWeight={"500"}
                mt={['0']}
              >
                {item.projectName}
              </Box>
              <Box fontFamily={theme.fonts.heading} fontSize={['0.9rem','1rem']}  lineHeight={["1.5rem"]}>
                {item.overview}
              </Box>

              <HStack >
                
                {/* Git Code */}
                <Link href={item.gitCode} target="_blank">
                <Button colorScheme="purple">
                  <HStack>
                    <Box fontSize={['1.1rem']}>
                    <FaGithub />
                    </Box>
                    <Box fontFamily={theme.fonts.heading} fontSize={['0.9rem']}>CODE</Box>
                  </HStack>
                </Button>
                </Link>

                {/* Link */}

                <Link href={item.link} target="_blank">
                <Button colorScheme="purple">
                  <HStack>
                    <Box fontSize={['1.1rem']}>
                    <FaLink />
                    </Box>
                    <Box fontFamily={theme.fonts.heading} fontSize={['0.9rem']}>DEMO</Box>
                  </HStack>
                </Button>
                </Link>

              </HStack>
            </VStack>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default ProjectSection;
