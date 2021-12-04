import { Box, Container, Stack, Spacer, Heading, Flex } from '@chakra-ui/react'
import React from 'react'
import { LeftPanelLink } from './LeftPanelLink'
import { MainPanelLinks } from './MainPanelLinks'

import { 
    FiHome,
    FiInfo,
    FiMessageCircle,
    FiPhone,
    FiLogOut,
    FiHash
} from 'react-icons/fi'

interface IHomeLayoutProps {
    children: React.ReactNode;
}

export const HomeLayout: React.FunctionComponent<IHomeLayoutProps> = ({ children }) => {
    return (
        <Box 
        display="flex" 
        flexDir="row"
        justifyContent="space-evenly"
        >
            <Box width="25vw" padding={5} height="auto">
                <Container centerContent>
                    <SidePanel />
                </Container>
            </Box>
            <Box padding={5} flex={1} height="auto">
                <MainPanelLinks />
                {children}
            </Box>
            <Box width="25vw" padding={5} height="auto">
                right panel
            </Box>
        </Box>
    )
}
const SidePanel: React.FunctionComponent = () => {
    return (
        <Flex direction="column">
            <Stack direction="column" spacing={2}>
                <LeftPanelLink
                    icon={<FiHome />}
                    title="Home" />
                <LeftPanelLink
                    icon={<FiMessageCircle />}
                    title="FAQ" />
                <LeftPanelLink
                    icon={<FiInfo />}
                    title="About" />
                <LeftPanelLink
                    icon={<FiPhone />}
                    title="Contact" />
                <LeftPanelLink
                    icon={<FiHash />}
                    title="Tags" />
            </Stack>
            <Spacer />
            <Heading size="sm" mt={10}>Other</Heading>
            <LeftPanelLink
                icon={<span>📄</span>}
                title="Terms and Conditions" />
            <LeftPanelLink
                icon={<span>👀</span>}
                title="Privacy Policy" />
            <LeftPanelLink
                icon={<span>👍🏽</span>}
                title="Code Of Conduct" />
        </Flex>
    )
}

