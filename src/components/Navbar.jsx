import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  Flex,
  HStack,
  Image,
  Link,
  Stack,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import { useTheme } from "@emotion/react";
import { FiArrowUpRight } from "react-icons/fi";
import { CgMenuRightAlt } from "react-icons/cg";
import Logo from "../Assets/Logo.png";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [bgcolor, setColor] = useState("");

  const firstField = useRef();
  const theme = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = 100;

      const scrollPosition = window.scrollY || window.pageYOffset;

      if (scrollPosition > scrollThreshold) {
        setColor({
          bgcolor: "white",
          boxShadow: "base",
        });
      } else {
        setColor("");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Box
      w={"100%"}
      position={"fixed"}
      top={0}
      zIndex={50}
      bgColor={bgcolor.bgcolor && bgcolor.bgcolor}
      boxShadow={bgcolor.boxShadow && bgcolor.boxShadow}
    >
      <Flex
        w={["100%"]}
        px={["2"]}
        maxW={"1500px"}
        mx={"auto"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Box flex={1}>
          <Box h={["90px"]} w={"90px"}>
            <Image h={"100%"} objectFit={"cover"} src={Logo} />
          </Box>
        </Box>

        <HStack
          flex={1}
          justifyContent={"center"}
          gap={{ lg: "2rem", xl: "3rem" }}
          display={{ base: "none", lg: "flex" }}
        >
          <Link href="#home"  _hover={{textDecorationLine:'none'}}>
            <Box
              cursor={"pointer"}
              fontWeight={"600"}
              fontSize={"1.1rem"}
              _hover={{ color: theme.colors.primaryColor, fontWeight: "700" }}
            >
              Home
            </Box>
          </Link>
          {/* About  */}
          <Link href="#about"  _hover={{textDecorationLine:'none'}}>
            <Box
              cursor={"pointer"}
              fontWeight={"600"}
              fontSize={"1.1rem"}
              _hover={{ color: theme.colors.primaryColor, fontWeight: "700" }}
            >
              About me
            </Box>
          </Link>

          {/* Skills */}
          <Link href="#skills"  _hover={{textDecorationLine:'none'}}>
            <Box
              cursor={"pointer"}
              fontWeight={"600"}
              fontSize={"1.1rem"}
              _hover={{ color: theme.colors.primaryColor, fontWeight: "700" }}
            >
              Skills
            </Box>
          </Link>

          {/* works */}
          <Link href="#works" _hover={{textDecorationLine:'none'}}>
            <Box
              cursor={"pointer"}
              fontWeight={"600"}
              fontSize={"1.1rem"}
              _hover={{ color: theme.colors.primaryColor, fontWeight: "700" }}
            >
              My Work
            </Box>
          </Link>
        </HStack>

        <Box
          flex={1}
          display={{ base: "none", lg: "flex" }}
          justifyContent={"flex-end"}
        >
          <Button
            display={"flex"}
            alignItems={"center"}
            gap={"0.3rem"}
            fontFamily={theme.fonts.heading}
            letterSpacing={"0.1rem"}
            opacity={"0.8"}
            size={["lg"]}
            border={"1px solid black"}
            fontSize={"1rem"}
            borderRadius={"30px"}
            _hover={{ bgColor: theme.colors.lightColor }}
            variant="outline"
            px={"2.5rem"}
          >
            Contact
            <Box fontSize={"1.1rem"}>
              <FiArrowUpRight />
            </Box>
          </Button>
        </Box>

        <Box display={{ base: "block", lg: "none" }}>
          <Box ref={firstField} onClick={onOpen} fontSize={"2rem"}>
            <CgMenuRightAlt />
          </Box>

          <Drawer
            isOpen={isOpen}
            placement="right"
            finalFocusRef={firstField}
            onClose={onClose}
          >
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton
                fontSize={"1.5rem"}
                mt={"1rem"}
                mr={"0.5rem"}
              />
              <DrawerBody mt={"9rem"} textAlign={"center"}>
                <Stack w={"100%"} gap={"2rem"}>
                  <Link href="#home" >
                  <Box fontSize={"1.5rem"} fontWeight={"bold"}  onClick={onClose}>
                    Home
                  </Box>
                  </Link>
                  <Link href="#about"  onClick={onClose}>
                  <Box fontSize={"1.5rem"} fontWeight={"bold"}>
                    About Me
                  </Box>
                  </Link>
                  <Link href="#skills"  onClick={onClose}>
                  <Box fontSize={"1.5rem"} fontWeight={"bold"}>
                    Skills
                  </Box>
                  </Link>
                  <Link href="#works"  onClick={onClose}>
                  <Box fontSize={"1.5rem"} fontWeight={"bold"}>
                    My Work
                  </Box>
                  </Link>
                  <Box fontSize={"1.5rem"} fontWeight={"bold"}>
                    Contact Me
                  </Box>
                </Stack>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </Box>
      </Flex>
    </Box>
  );
};

export default Navbar;
