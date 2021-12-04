import { Box, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-location'

interface ILeftLinkProps<T> {
    icon?: React.ReactElement;
    url?: string;
    title: string;
    data?: T;
}

export const LeftPanelLink: React.FunctionComponent<ILeftLinkProps<string>> = ({icon, title, url}) => {
    return (
        <Link to={url}>
            <Box
            width="auto"
            height="auto"
            py={2}
            px={5}
            borderRadius="5px"
            _hover={{
                bgColor: "gray.200", transition: "0.3s ease-in-out",
                color: "#5041F8"
            }}
            >
                <Stack direction="row" spacing={2}>
                    <Box
                    display="flex"
                    flex-direction="row"
                    alignItems="center"
                    >
                        {icon}
                    </Box>
                    <Text
                    fontSize="md"
                    >{title}</Text>
                </Stack>
            </Box>
        </Link>
    )
}
