import { Box, Button, Container, Heading, Stack, Text } from "@chakra-ui/react"
import { FiChevronRight } from 'react-icons/fi'
import { Link } from "react-location";
import Lottie from 'react-lottie-player';

import animation from '../public/landing-animation.json';


export const LandingPage:React.FunctionComponent = () => {
    return (
        <Container maxW="container.xl" mt={10}>
            <Box
             display="grid"
             placeItems="center"
            >
                <Heading
                textAlign="center"
                fontSize="6xl"
                color="#20063B"
                mt={10}
                >
                    Let Us Help You Find The Bursary You've Always Wanted.
                </Heading>
                <Stack spacing={3} mt={5} align="center">
                    <Text
                     fontSize="xl"
                     color="blue.800"
                    >
                        Findr helps you find, apply and track your bursary applications.
                    </Text>
                    <Link to="/sign-up">
                        <Button bgColor="#5041F8" color="white" colorScheme="blue.500" rightIcon={<FiChevronRight />}>
                            Sign Up For Free!
                        </Button>
                    </Link>
                    <Lottie
                     className="animation"
                     animationData={animation}
                     loop
                     play
                    />
                </Stack>
            </Box>
        </Container>
    )
}
