import React from 'react'

import { Box } from '@chakra-ui/react'

interface IGradientBoxProps {
    children: React.ReactNode;
    height: string;
    displayFlex: boolean;
}

export const LayoutBox: React.FunctionComponent<IGradientBoxProps> = ({children, height, displayFlex}) => {
    return (
        <Box
        width="100vw"
        height={height}
        paddingBottom={5}
        bgColor="#f4f4f4"
        display={displayFlex ? "flex": ""}
        flexDirection={displayFlex ? "column" : undefined}
        alignItems={displayFlex ? "center" : ""}
        >
            {children}
            
        </Box>
    )
}
