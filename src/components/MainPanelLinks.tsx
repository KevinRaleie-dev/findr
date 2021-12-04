import { Stack, Box, Button, Text } from '@chakra-ui/react'
import React from 'react'
import { useLocation, Link } from 'react-location'

export const MainPanelLinks = () => {
    return (
       <Stack direction="row" spacing={2}>
         <Link to='/home'>
            <ButtonLink title="Feed" path="/home" />
         </Link>
         <Link to='/links'>
            <ButtonLink title="Links" path="/links" />
         </Link>
       </Stack>
    );
}

interface IButtonLinkProps {
  title: string;
  path: string;
}

const ButtonLink: React.FunctionComponent<IButtonLinkProps> = ({ title, path }) => {
  const location = useLocation();
  return (
    <Box>
      <Button variant="ghost"
      >
        <Text
        color={location.current.pathname === path ? '#5041F8' : 'gray.700'}
        fontWeight={location.current.pathname === path ? 'bold' : 'normal'}
        fontSize={location.current.pathname != path ? 'md' : 'xl'}
        >
          {title}
        </Text>
      </Button>
    </Box>
  );
}
