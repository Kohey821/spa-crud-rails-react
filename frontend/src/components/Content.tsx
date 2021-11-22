import * as React from 'react';
import {
  Box,
  Heading,
} from '@chakra-ui/react';

interface Props {
  children: React.ReactNode
  title: string
}

function Content({
  children,
  title,
}: Props) {
  return (
    <Box px="2" pb="2">
      <Heading
        as="h1"
        mb="2"
        bgGradient="linear(to-tr, pink.500, purple.500)"
        bgClip="text"
      >
        {title}
      </Heading>

      {children}
    </Box>
  );
}

export default Content;
