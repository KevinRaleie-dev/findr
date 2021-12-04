import { Heading, Stack, Text, Box, Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';
import { Link } from 'react-location';
import { Card } from '../components/Card';

import { LayoutBox } from '../components/LayoutBox';
import { UserSignUpForm } from '../components/forms/UserSignUpForm';
import { Footer } from '../components/Footer';
import { OrgSignUpForm } from '../components/forms/OrgSignUpForm';

export const SignUpPage = () => {
    return (
        <>
            <LayoutBox height="auto" displayFlex={true}>
                <Card>
                    <Stack direction="column" spacing={3} align="center">
                        <Heading
                        size="lg"
                        >Create Account
                        </Heading>
                        <Stack direction="row" spacing={1}>
                            <Text>Already have an account?</Text>
                            <Link to="/sign-in">
                                <Text
                                as="u"
                                _hover={{ color: '#5041F8', fontWeight: 'semibold', transition: '0.2s ease-in-out' }}
                                >Sign In.</Text>
                            </Link>
                        </Stack>
                        <Tabs variant="soft-rounded" pt={4}>
                            <TabList>
                                <Tab>Student</Tab>
                                <Tab>Organization</Tab>
                            </TabList>
                            <TabPanels>
                                <TabPanel>
                                    <UserSignUpForm />
                                </TabPanel>
                                <TabPanel>
                                    <OrgSignUpForm />
                                </TabPanel>
                            </TabPanels>
                        </Tabs>
                    </Stack>
                </Card>
            </LayoutBox>
            <Footer />
        </>
    )
}
