import React from 'react';
import { Box, Button, Flex, Spacer, Stack, Badge, Text, Input, Avatar } from '@chakra-ui/react'
import { NavLink } from './NavLinks';

import { FiPlus } from 'react-icons/fi'

import { useUserStore } from '../store/user.store';

import { Link } from 'react-location'
import { NavMenu } from './NavMenu';

export const Nav: React.FunctionComponent = () => {
    const user = useUserStore((state) => state.user);
    const token = useUserStore((state) => state.token);

    return (
        <Flex
        paddingY={4}
        paddingX={12}
        top={0}
        bgColor="white"
        position="sticky"
        borderBottom="1px"
        borderColor="gray.200"
        zIndex={1}
        >
            <Box
            display="grid"
            placeItems="center"
            align="center"
            >
                <Link to={token ? '/home' : '/'}>
                    <Box
                    padding={1}
                    bgColor="black"
                    borderRadius="3px"
                    color="white"
                    >
                        <Text
                        fontWeight="bold"
                        fontSize="xl"
                        >
                            Findr
                        </Text>
                    </Box>
                </Link>
            </Box>
            <Stack
            ml={5}
            direction="row"
            spacing={5}
            align="center"
            >
                {
                    !token ?
                    <React.Fragment>
                        <NavLink title="FAQ" />
                        <NavLink title="Who We Are" />
                        <NavLink title="Features" />
                        <NavLink title="Pricing" />
                        <NavLink title="Hire A Graduate" badge={<Badge ml={1} colorScheme="green">coming soon</Badge>} />
                    </React.Fragment>
                    :
                    <React.Fragment>
                        <Input 
                        width={400}
                        placeholder="Search for bursaries, tags, organizations etc..." />
                    </React.Fragment>
                }
            </Stack>
            <Spacer />
            <Stack
            direction="row"
            alignItems="center"
            spacing={3}
            >
                {
                    !token ?
                    <>
                        <Link to="sign-in">
                            <Button variant="outline">
                                Sign In
                            </Button>
                        </Link>
                        <Link to="sign-up">
                            <Button
                            bgColor="#5041F8"
                            colorScheme="#5041F8"
                            color="white"
                            >
                                Create Account
                            </Button>
                        </Link>
                    </>
                    : <Stack direction="row" align="center" spacing={3}>
                        <Button
                            bgColor="#5041F8"
                            colorScheme="#5041F8"
                            color="white"
                            leftIcon={<FiPlus />}
                            >
                                Apply For Bursary
                        </Button>
                        <NavMenu
                        user={user}
                        >
                            <Avatar
                            width="40px"
                            height="40px"
                            name={user.fullName}
                            />
                        </NavMenu>
                    </Stack> 
                }
                
            </Stack>
        </Flex>
    )
}
