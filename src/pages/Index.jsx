import { Box, Button, Container, Flex, Heading, Image, Link, Text, VStack } from "@chakra-ui/react";
import { FaPalette, FaPhone } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <Flex direction="column" align="center" justify="center" minHeight="100vh" bg="white">
        <Box as="header" w="full" py={4} px={8} boxShadow="sm">
          <Flex justify="space-between" align="center">
            <FaPalette size="28" color="#3182CE" />
            <Flex gap={4}>
              <Link href="#services" fontSize="lg" fontWeight="medium" color="gray.600">
                Services
              </Link>
              <Link href="#portfolio" fontSize="lg" fontWeight="medium" color="gray.600">
                Portfolio
              </Link>
              <Link href="#contact" fontSize="lg" fontWeight="medium" color="gray.600">
                Contact
              </Link>
            </Flex>
          </Flex>
        </Box>

        <VStack spacing={10} mt={10} px={8} textAlign="center">
          <Heading fontSize="4xl" fontWeight="bold" color="gray.800">
            Creative Brush Strokes
          </Heading>
          <Text fontSize="xl" color="gray.500">
            Bringing colors to life with every stroke!
          </Text>
          <Image src="https://images.unsplash.com/photo-1533090161767-e6ffed986c88?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwYWludGVyJTIwYXQlMjB3b3JrfGVufDB8fHx8MTcxNTQ0MjQxOHww&ixlib=rb-4.0.3&q=80&w=1080" alt="Painter at work" boxSize="300px" objectFit="cover" borderRadius="full" />
          <Button colorScheme="blue" size="lg" rightIcon={<FaPhone />}>
            Get a Quote
          </Button>
        </VStack>

        <Box as="footer" w="full" py={4} px={8} mt="auto" bg="gray.100">
          <Flex justify="space-between" align="center">
            <Text fontSize="sm" color="gray.600">
              &copy; {new Date().getFullYear()} Creative Brush Strokes
            </Text>
            <Flex gap={4}>
              <Link href="#privacy" fontSize="sm" color="gray.600">
                Privacy Policy
              </Link>
              <Link href="#terms" fontSize="sm" color="gray.600">
                Terms of Service
              </Link>
            </Flex>
          </Flex>
        </Box>
      </Flex>
    </Container>
  );
};

export default Index;
