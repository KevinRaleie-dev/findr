import React from 'react'
import { Box, Button, Divider, FormControl, FormLabel, Input, Select, Stack } from '@chakra-ui/react'
import { FiArrowRight } from 'react-icons/fi';

import { useFormik } from 'formik';

import type { OrganizationType } from '../../api'
import { fetchCountries, COUNTRY_API } from '../../api'

import useSwr from 'swr';

export const OrgSignUpForm = () => {

    const { data } = useSwr(COUNTRY_API, fetchCountries);

    const formik = useFormik<OrganizationType>({
        initialValues: {
            city: '',
            country: '',
            email: '',
            name: '',
            password: '',
            postalCode: '',
            province: '',
            streetName: '',
            streetNumber: 0,
            url: ''
        },
        onSubmit: async (values, action) => {
            alert(JSON.stringify(values, null, 2));
        }
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <Stack spacing={3}>
                <FormControl id="name">
                    <FormLabel>Name of Organization</FormLabel>
                    <Input 
                    type="text" 
                    name="name" 
                    onChange={formik.handleChange}
                    value={formik.values.name}
                    placeholder="Organization Name" 
                    width="350px" />
                </FormControl>
                <FormControl id="email">
                    <FormLabel>Email Address</FormLabel>
                    <Input 
                    type="email" 
                    name="email" 
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    placeholder="Organization Email Address" 
                    width="350px" />
                </FormControl>
                <FormControl id="url">
                    <FormLabel>Website URL</FormLabel>
                    <Input 
                    type="url" 
                    name="url" 
                    onChange={formik.handleChange}
                    value={formik.values.url}
                    placeholder="Organization Website URL" 
                    width="350px" />
                </FormControl>
                <FormControl>
                    <FormLabel>Country</FormLabel>
                    <Select 
                    name="country"
                    width="350px"
                    value={formik.values.country}
                    onChange={formik.handleChange}
                    placeholder="Select Country">
                        {
                            data?.map((country: any, idx: any) => (
                                <option
                                key={idx}
                                label={country.name.common}
                                value={country.name.common} />
                            ))
                        }
                    </Select>
                </FormControl>
                <Divider pt={3} />
                <FormLabel>Organization Address</FormLabel>
                <Stack direction="row" >
                    <FormControl id="streetNumber">
                        <Input 
                        type="number" 
                        name="streetNumber" 
                        onChange={formik.handleChange}
                        value={formik.values.streetNumber}
                        placeholder="Street Number" 
                        width="150px" />
                    </FormControl>
                    <FormControl id="streetName">
                        <Input 
                        type="text" 
                        name="streetName" 
                        onChange={formik.handleChange}
                        value={formik.values.streetName}
                        placeholder="Street Name" 
                        width="180px" />
                    </FormControl>
                </Stack>
                <FormControl id="province">
                    <Input 
                    type="text" 
                    name="province" 
                    onChange={formik.handleChange}
                    value={formik.values.province}
                    placeholder="Province or State" 
                    width="350px" />
                </FormControl>
                <FormControl id="city">
                    <Input 
                    type="text" 
                    name="city" 
                    onChange={formik.handleChange}
                    value={formik.values.city}
                    placeholder="City" 
                    width="350px" />
                </FormControl>
                <FormControl id="postalCode">
                    <Input 
                    type="text" 
                    name="postalCode" 
                    onChange={formik.handleChange}
                    value={formik.values.postalCode}
                    placeholder="Postal Code" 
                    width="350px" />
                </FormControl>
                <FormControl id="password">
                <FormLabel>Create Password</FormLabel>
                    <Input 
                    type="password" 
                    name="password" 
                    onChange={formik.handleChange}
                    value={formik.values.password}
                    placeholder="Enter a password" 
                    width="350px" />
                </FormControl>
                <Box pt={3}>
                    <Button type="submit" rightIcon={<FiArrowRight />}>
                        Continue
                    </Button>
                </Box>
            </Stack>
        </form>
    )
}
