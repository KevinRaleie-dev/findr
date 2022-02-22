import { FormControl, FormLabel, Input, Stack, Flex, Spacer, Button, Text } from '@chakra-ui/react'
import React from 'react'
import { FiArrowRight } from 'react-icons/fi'

import { useFormik } from 'formik';
import type { LoginType } from '../../api/mod';

import { useSWRConfig } from 'swr'

import { loginOrganization } from '../../api/mod'

export const OrgSignInForm: React.FunctionComponent = () => {

    const { mutate } = useSWRConfig();

    const formik = useFormik<LoginType>({
        initialValues: {
            email: '',
            password: '',
        },
        onSubmit: async (values, action) => {
            const res = await mutate('sign-in', loginOrganization(values) , false);
            console.log(res);

            if (res.status != 200) {
                action.setSubmitting(false);
                alert('Something went wrong');
            }
            else {
                action.setSubmitting(false);
                alert('Success');
            }
        }
    })

    return (
        <form onSubmit={formik.handleSubmit}>
           <Stack spacing={3}>
                <FormControl id="email">
                    <FormLabel>Email</FormLabel>
                    <Input 
                    type="email" 
                    name="email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    placeholder="Email" 
                    width="350px" />
                </FormControl>
                <FormControl id="password">
                    <FormLabel>Password</FormLabel>
                    <Input 
                    type="password" 
                    name="password"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                    placeholder="Password" 
                    width="350px" />
                </FormControl>
                <Flex>
                    <Spacer />
                    <Text
                    fontWeight="semibold"
                    fontSize="sm"
                    color="#5041F8"
                    cursor="pointer"
                    >
                        Forgot Password?
                    </Text>
                </Flex>
                <Button
                type="submit"
                isLoading={formik.isSubmitting}
                loadingText="Signing in..."
                rightIcon={<FiArrowRight />}>
                    Sign In
                </Button>
           </Stack>
       </form>
    )
}
