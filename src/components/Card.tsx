import { Box } from '@chakra-ui/react'
import React from 'react'

interface ICardProps {
    children: React.ReactNode;
    marginTop?: number;
}

export const Card: React.FunctionComponent<ICardProps> = ({children, marginTop}) => {
    return (
        <Box
        bgColor="white"
        width="450px"
        paddingX={5}
        paddingY={5}
        mt={marginTop ?? 10}
        borderWidth="1px"
        borderRadius="lg"
        >
            {children}
        </Box>
    )
}
