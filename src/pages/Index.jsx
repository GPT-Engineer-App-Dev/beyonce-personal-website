import { Box, Text, Image, Button, VStack, Link } from '@chakra-ui/react';
import { FaMusic, FaGlobeAmericas, FaHeart } from 'react-icons/fa';

const Index = () => {
  return (
    <Box textAlign="center" fontSize="xl">
      <VStack spacing={8}>
        <Image
          borderRadius="full"
          boxSize="150px"
          src="/images/beyonce.jpg"
          alt="Beyonce"
          m="auto"
        />
        <Text fontSize="4xl" fontWeight="bold">Beyoncé</Text>
        <Text>Welcome to the official website of Beyoncé. Explore her music, tours, and philanthropy work.</Text>
        <Button leftIcon={<FaMusic />} colorScheme="pink" variant="solid">
          Music
        </Button>
        <Button leftIcon={<FaGlobeAmericas />} colorScheme="pink" variant="solid">
          Tours
        </Button>
        <Button leftIcon={<FaHeart />} colorScheme="pink" variant="solid">
          Philanthropy
        </Button>
      </VStack>
    </Box>
  );
};

export default Index;