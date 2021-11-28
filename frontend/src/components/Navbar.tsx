import { Link } from 'react-router-dom';
import {
  Box,
  Flex,
  Spacer,
} from "@chakra-ui/react";
import ColorModeToggler from './ColorModeToggler';

export default function Navbar() {
  return (
    <Flex
      align="center"
      p="2"
      backdropFilter="blur(.25rem)"
    >
      <Link
        to="/"
      >
        SPA投函
      </Link>

      <Spacer />

      <ColorModeToggler />

      <Box as="nav" ms="2">
        <Flex as="ul" listStyleType="none">
          <Box as="li"><Link to="/">一覧</Link></Box>
          <Box as="li" ms="2"><Link to="/new">投函</Link></Box>
        </Flex>
      </Box>
    </Flex>
  );
}
