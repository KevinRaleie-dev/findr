import { Menu, MenuButton, MenuList, MenuItem, MenuDivider, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { useUserStore } from '../store/user.store'

import { useNavigate } from 'react-location'
import type { User } from '../api/mod'

interface INavMenuProps {
    children: React.ReactNode;
    user?: User;
}

export const NavMenu: React.FunctionComponent<INavMenuProps> = ({children, user}) => {
    const logout = useUserStore((state) => state.logout);
    const navigate = useNavigate();
    return (
        <Menu>
        <MenuButton>
            {children}
        </MenuButton>
        <MenuList
        padding={2}
        >
            <MenuItem
            borderRadius="5px"
            >
                <Stack direction="column" spacing={3}>
                    <Text
                    fontWeight="semibold"
                    >
                        {user?.fullName}
                    </Text>
                    <Text
                    fontSize="sm"
                    color="gray.500"
                    >
                        {user?.email}
                    </Text>
                </Stack>
            </MenuItem>
            <MenuDivider />
            <MenuItem
            borderRadius="5px"
            >Applications</MenuItem>
            <MenuItem
            borderRadius="5px"
            >Settings</MenuItem>
            <MenuDivider />
            <MenuItem
            onClick={() => {
                logout();
                navigate({
                    to: '/sign-in',
                    replace: true
                })
            }}
            borderRadius="5px"
            >Logout</MenuItem>
        </MenuList>
        </Menu>
    )
}
