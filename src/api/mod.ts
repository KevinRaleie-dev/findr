import axios from 'axios';

// This is the API url we will use to connect to the server
export const API_BASE_URL: string = 'http://localhost:5224';
export const API_LINKS_URL: string = 'https://bursary-findr.herokuapp.com/bursaries/?search='
export const COUNTRY_API: string = 'https://restcountries.com/v3.1/all';

export type RegisterType = {
    email: string;
    phoneNumber: string;
    firstName: string;
    lastName: string;
    password: string;
}

export type LoginType = {
    email: string;
    password: string;
}

export type OrganizationType = {
    name: string;
    email: string;
    password: string;
    url: string;
    country: string;
    streetName: string;
    streetNumber: number;
    city: string;
    province: string;
    postalCode: string;
}


// export type User<T> = T extends PromiseLike<infer U> ? U : T;


export type User = {
    id: number;
    firstName?: string;
    lastName?: string;
    fullName?: string;
    bio?: string;
    phoneNumber?: string;
    email: string;
}

export type Token = {
    token: string;
}

// fetcher used to register a user
export async function registerUserFetcher(data: RegisterType): Promise<unknown> {
    const url: string = 'api/auth/register/user'
    try {
        const response = await axios.post(`${API_BASE_URL}/${url}`, data);
        return response;
    } catch (error) {
        return error;
    }

}

// fetcher used to register an organization
export async function registerOrganizationFetcher(data: OrganizationType) {
    const url: string = 'api/auth/register/organization'
    try {
        const response = await axios.post(`${API_BASE_URL}/${url}`, data);
        return response;
    } catch (error) {
        return error;
    }
}

// fetcher used to login a user
export async function loginUserFetcher(data: LoginType): Promise<any> {
    const url: string = 'api/auth/login/user';
    try {
        const response = await axios.post(`${API_BASE_URL}/${url}`, data);
        return response;
    } catch (error) {
        return error;
    }
}

export async function loginOrganization(data: LoginType) {
    const url: string = 'api/auth/login/organization';
    try {
        const response = await axios.post(`${API_BASE_URL}/${url}`, data);
        return response;
    } catch (error) {
        return error;
    }
}

// fetch bursary links from external api
export async function fetchLinks(url: string) {
    try {
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        return error;
    }
}

// fetcher used to get a list of countries
export async function fetchCountries(url: string): Promise<any> {
    try {
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        return error;
    }
}

export async function fetchCurrentUser(data: Token): Promise<User | unknown> {
    
    const url = '/api/me/user'
    try {
        const response = await axios.post(`${API_BASE_URL}${url}`, data);
        return response.data;
        
    } catch (error) {
        return error;
    }
}