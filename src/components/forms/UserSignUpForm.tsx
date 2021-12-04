import React from 'react'

import { Box, Button, FormControl, FormHelperText, FormLabel, Input, Stack, useToast } from '@chakra-ui/react'

import { FiArrowRight } from 'react-icons/fi'
import { useNavigate } from 'react-location'

import { registerUserFetcher } from '../../api'

import { useFormik } from 'formik'
import { useSWRConfig } from 'swr'
import { IHandleSubmit } from '../../types'

import type { RegisterType } from '../../api'

export const UserSignUpForm: React.FunctionComponent = () => {
    const { mutate } = useSWRConfig();

    const toast = useToast();

    const navigate = useNavigate();



    const handleSubmit = (params: IHandleSubmit) => {
        toast({
            title: params.title,
            description: params.description,
            position: 'top',
            variant: 'subtle',
            status: params.status,
            duration: params.duration,
            isClosable: true,
        });
    }

    const formik = useFormik<RegisterType>({
        initialValues: {
            email: '',
            phoneNumber: '',
            firstName: '',
            lastName: '',
            password: '',
        },
        onSubmit: async (values, action) => {
            const res = await mutate('sign-up', registerUserFetcher(values), false);
            console.log(res);
            if (res.status != 201) {
                handleSubmit({
                   status: "error",
                   duration: 5000,
                   title: "Error Signing Up.",
                   description: "This account already exists. Try again."
                });

                action.setSubmitting(false);
            }
            else {
                action.setSubmitting(false);

                handleSubmit({
                    status:"success",
                    duration: 5000,
                    title: "Account created successfully",
                    description: "We've successfully created your account"
                });
                
                navigate({
                    to: '/sign-in',
                    replace: false
                });
            }
        }
    })

    return (
        <form onSubmit={formik.handleSubmit}>
            <Stack direction="column" spacing={3}>
                <FormControl id="email">
                    <FormLabel>Email address</FormLabel>
                    <Input 
                    type="email" 
                    name="email" 
                    required
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    placeholder="Email" 
                    width="350px" />
                    <FormHelperText>We'll never share your email.</FormHelperText>
                </FormControl>
                <FormControl id="phoneNumber">
                    <FormLabel>Phone Number</FormLabel>
                    <Input 
                    type="tel" 
                    name="phoneNumber"
                    onChange={formik.handleChange}
                    value={formik.values.phoneNumber}
                    placeholder="Phone number" 
                    width="350px" />
                </FormControl>
                <FormControl id="firstName">
                    <FormLabel>First Name</FormLabel>
                    <Input 
                    type="text"
                    name="firstName"
                    onChange={formik.handleChange}
                    value={formik.values.firstName}
                    placeholder="First Name" 
                    width="350px" />
                </FormControl>
                <FormControl id="lastName">
                    <FormLabel>Last Name</FormLabel>
                    <Input 
                    type="text" 
                    name="lastName"
                    onChange={formik.handleChange}
                    value={formik.values.lastName}
                    placeholder="Last Name" 
                    width="350px" />
                </FormControl>
                <FormControl id="password">
                    <FormLabel>Password</FormLabel>
                    <Input 
                    type="password" 
                    name="password"
                    required
                    onChange={formik.handleChange}
                    value={formik.values.password}
                    placeholder="Password" 
                    width="350px" />
                </FormControl>
                <Box pt={3}>
                    <Button 
                    isLoading={formik.isSubmitting}
                    loadingText="Signing up..."
                    type="submit" rightIcon={<FiArrowRight />}>
                        Continue
                    </Button>
                </Box>
            </Stack>
        </form>
    )
}
