import { Heading, Stack, Text, Image, color } from '@chakra-ui/react'
import { Link } from 'react-location'
import { Card } from './Card'

interface IBursaryLinkProps {
    title: string;
    date: string;
    link: string;
}

export const BursaryLink: React.FunctionComponent<IBursaryLinkProps> = ({date,title, link}) => {
    return (
    <Card marginTop={3}>
        <Stack direction="column" spacing={2}>
            <Image
            src={`https://avatars.dicebear.com/api/identicon/${title}.svg`}
            width={50}
            height={50}
            borderRadius="10px"
            />
            <a href={`${link}`}>
                <Text 
                _hover={{color: 'blue.800'}}
                fontSize="lg"
                fontWeight="semibold">{title}</Text>
            </a>
            <Text
            fontSize="sm"
            color="gray.500"
            >{date}</Text>
        </Stack>
    </Card>
    )
}
