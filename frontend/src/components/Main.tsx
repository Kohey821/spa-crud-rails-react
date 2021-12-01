import { Outlet } from 'react-router-dom';
import { Container } from '@chakra-ui/react';

export default function Main() {
  return (
    <Container
      maxW="container.md"
      py="2"
    >
      <Outlet />
    </Container>
  );
}
