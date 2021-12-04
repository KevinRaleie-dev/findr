import React from 'react'

import { Flex, Spacer, Box, Text } from '@chakra-ui/react'

export const Footer = () => {
    return (
        <Flex
        bottom={0}
        position="sticky"
        bgColor="white"
        p={2}
        borderTopWidth="1px"
        >
            <FooterText text="Bursary Finder @2021 Rights Reserved" />
            <Spacer />
            <FooterText text="Terms and Conditions" />
        </Flex>
    )
}

interface IFooterTextProps {
    text: string
}

const FooterText: React.FunctionComponent<IFooterTextProps> = ({text}) => {
    return (
        <Box>
            <Text
            fontSize="sm"
            color="gray.600"
            >
                {text}
            </Text>
        </Box>
    )
}
