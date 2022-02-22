import { useEffect } from 'react'
import { Heading, Text } from '@chakra-ui/react'
import { HomeLayout } from '../components/HomeLayout'
import { LayoutBox } from '../components/LayoutBox'

import { useUserStore } from '../store/user.store'
import { useSWRConfig } from 'swr'
import { useNavigate } from 'react-location'

import { fetchCurrentUser } from '../api/mod'

export const HomePage = () => {
    const { mutate } = useSWRConfig();
    const navigate = useNavigate();
    const token = useUserStore((state) => state.token);
    const setCurrentUser = useUserStore((state) => state.setCurrentUser)

    useEffect(() => {
        (async () => {
            if (!token) {
                // TODO: redirect to the login page
                navigate({
                    to: '/sign-in',
                    replace: true
                });
            }
            else {
                const res = await mutate('user', fetchCurrentUser({token}), true);
                setCurrentUser(res);
            }
        })()
    }, [token])

    return (
        <LayoutBox height="auto" displayFlex={false}>
           <HomeLayout>
               <Heading size="sm">
                    Nothing to see here... yet
               </Heading>
               <Text>This is where the bursaries will be shown.</Text>
           </HomeLayout>
        </LayoutBox>
    )
}
