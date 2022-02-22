import React from 'react'
import { Center, CircularProgress, Container, Heading, Skeleton, Text } from '@chakra-ui/react'
import { HomeLayout } from '../components/HomeLayout'
import { LayoutBox } from '../components/LayoutBox'
import { Card } from '../components/Card'

import { fetchLinks, API_LINKS_URL } from '../api/mod'

import useSwr from 'swr'
import { BursaryLink } from '../components/BursaryLink'

interface BursaryList {
    closing: string;
    name: string;
    link: string;
}

interface BursaryData {
    bursaryList: BursaryList[];
    success: boolean;
    title: string;
}

export const LinksPage = () => {
    const [date, setDate] = React.useState(new Date());

    const month = date.toLocaleString('default', {month: 'long'});

    const { data } = useSwr<BursaryData>(`${API_LINKS_URL}${month}`, fetchLinks);

    return (
    <LayoutBox height="auto" displayFlex={false}>
       <HomeLayout>
            <Container mt={5}>
                {
                    !data ? 
                    <Center>
                        <CircularProgress isIndeterminate color="blue.800" />
                    </Center>
                    : <React.Fragment>
                        {
                            data.bursaryList.map((item, idx) => (
                                <div key={idx}>
                                    <BursaryLink 
                                    title={item.name}
                                    date={item.closing}
                                    link={item.link}
                                    />
                                </div>
                            ))
                        }
                    </React.Fragment>
                }
                
            </Container>
       </HomeLayout>
    </LayoutBox>
    )
}
