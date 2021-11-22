import { Link } from 'react-router-dom';
import {
  Box,
  Flex,
  Spacer,
} from "@chakra-ui/react";
import ColorModeToggler from './ColorModeToggler';

function Navbar() {
  return (
    <Flex
      align="center"
      p="2"
      position="sticky"
      top="0"
    >
      <p>SPA投函</p>

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

export default Navbar;
