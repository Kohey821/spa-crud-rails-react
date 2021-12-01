import { useHref } from 'react-router-dom';
import {
  Box,
  Button,
  Container,
  Flex,
  Spacer,
  Text,
} from "@chakra-ui/react";
import ColorModeToggler from './ColorModeToggler';

export default function Navbar() {
  const toHomeHref = useHref('/');
  const toCreateHref = useHref('/new');

  return (
    <Box
      backdropFilter="blur(.25rem)"
      shadow="md"
    >
      <Container
        maxW="container.md"
      >
        <Flex
          align="center"
          py="2"
        >
          <Text
            as="a"
            href={toHomeHref}
            fontWeight="bold"
          >
            SPA CRUD
          </Text>

          <Spacer />

          <ColorModeToggler />

          <Box as="nav" ms="2">
            <Flex
              as="ul"
              listStyleType="none"
              alignItems="center"
            >
              <Box as="li">
                <Text
                  as="a"
                  href={toHomeHref}
                  fontWeight="bold"
                >
                  一覧
                </Text>
              </Box>
              <Box as="li" ms="2">
                <Button
                  as="a"
                  size="sm"
                  bgGradient="linear(to-tr, pink.500, purple.500)"
                  color="white"
                  href={toCreateHref}
                >
                  新規
                </Button>
              </Box>
            </Flex>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
}
