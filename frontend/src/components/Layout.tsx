import { Box } from '@chakra-ui/react';
import Main from './Main';
import Navbar from './Navbar';

function Layout() {
  return (
    <Box zIndex="1">
      <Box
        zIndex="2"
        position="sticky"
        top="0"
      >
        <Navbar />
      </Box>

      <Box zIndex="1">
        <Main />
      </Box>
    </Box>
  );
}

export default Layout;
