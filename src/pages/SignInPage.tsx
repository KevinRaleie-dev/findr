import React from 'react'
import { Stack, Heading, Text, Tabs, TabList, Tab, TabPanels, TabPanel, Box } from '@chakra-ui/react'
import { Card } from '../components/Card'
import { Footer } from '../components/Footer'
import { LayoutBox } from '../components/LayoutBox'

import { Link } from 'react-location'
import { UserSignInForm } from '../components/forms/UserSignInForm'
import { OrgSignInForm } from '../components/forms/OrgSignInForm'

export const SignInPage = () => {
    return (
        <React.Fragment>
            <LayoutBox height="90vh" displayFlex={true}>
                <Card>
                <Stack direction="column" spacing={3} align="center">
                        <Heading
                        size="lg"
                        >Welcome Back 👋
                        </Heading>
                        <Text color="gray.600">To sign into your account please enter your details.</Text>
                        <Tabs variant="soft-rounded" pt={4}>
                            <TabList>
                                <Tab>Student</Tab>
                                <Tab>Organization</Tab>
                            </TabList>
                            <TabPanels>
                                <TabPanel>
                                    <UserSignInForm />
                                    <BottomPanel />
                                </TabPanel>
                                <TabPanel>
                                    <OrgSignInForm />
                                    <BottomPanel />
                                </TabPanel>
                            </TabPanels>
                        </Tabs>
                    </Stack>
                </Card>
            </LayoutBox>
            <Footer />
        </React.Fragment>
    )
}

const BottomPanel = () => {
    return (
        <Box
        display="grid"
        placeItems="center" 
        >
            <Stack  direction="row" spacing={1} mt={4} >
            <Text>Don't have an account?</Text>
            <Link to="/sign-up">
                <Text
                as="u"
                _hover={{ color: '#5041F8', fontWeight: 'semibold', transition: '0.2s ease-in-out' }}
                >Sign up for free!</Text>
            </Link>
            </Stack>
        </Box>
    );
}
