import { Container, Heading, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { Footer } from '../components/Footer'

export const NotFoundPage = () => {
    return (
        <>
            <Container>
                <Stack direction="column" spacing={2} mt={10}>
                    <Heading size="2xl">
                        404: Not Found
                    </Heading>
                    <Text fontSize="xl" fontWeight="semibold">
                        Erm...Oops!
                    </Text>
                    <Text fontSize="lg">
                        Somebody took a left turn ⏎
                    </Text>
                </Stack>
            </Container>
        </>
    )
}
