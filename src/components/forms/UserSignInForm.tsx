import React from 'react'
import { Button, FormControl, FormLabel, Input, Stack, Box, Flex, Text, Spacer, useToast } from '@chakra-ui/react'
import { FiArrowRight } from 'react-icons/fi'

import { useFormik } from 'formik';
import { useSWRConfig } from 'swr';
import { useNavigate } from 'react-location'

import { loginUserFetcher } from '../../api'
import type { LoginType } from '../../api'
import { IHandleSubmit } from '../../types';
import { useUserStore } from '../../store/user.store'

export const UserSignInForm: React.FunctionComponent = () => {

    const login = useUserStore((state) => state.login);
    const toast = useToast();

    const navigate = useNavigate();

    const { mutate } = useSWRConfig();

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

    const formik = useFormik<LoginType>({
        initialValues: {
            email: '',
            password: ''
        },
        onSubmit: async (values, action) => {
            const res = await mutate('sign-in', loginUserFetcher(values) , false);
            if(res.status != 200){
                action.setSubmitting(false);
                handleSubmit({
                    status: "error",
                    duration: 5000,
                    title: "Error Signing In.",
                    description: "Please check your details or your network and try again.",
                });
            }
            else {
                action.setSubmitting(false);
                
                login(res.data.token);
    
                navigate({
                    to: '/home',
                    replace: true
                });
            }
        }
    });
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
