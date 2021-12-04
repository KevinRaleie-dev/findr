import React from 'react'
import { Text } from '@chakra-ui/react';

interface INavLinksProps {
    title: string;
    badge?: React.ReactElement;
}

export const NavLink:React.FunctionComponent<INavLinksProps> = ({title, badge}) => {
    return (
        <Text
        color="blue.800"
        fontWeight="semibold"
        cursor="pointer"
        _hover={{textDecoration: "underline", transform: "0.3s scale-in-out"}}
        >
            {title}
            {badge}
        </Text>
    )
}
