import { useHref } from 'react-router-dom';

import {
  Box,
  Flex,
  Heading,
  Image,
  Text,
} from '@chakra-ui/react';

export interface Props {
  [key: string]: string
  id: string
  title: string
  body: string
  image_url: string
}

export default function Post(props: Props) {
  const href = useHref(`/${props.id}`);

  return (
    <Flex
      align="start"
      h="24"
      p="2"
      borderRadius="2"
    >
      <Box as="a" href={href} w="16" flex="none">
        <Image
          src={`${process.env.REACT_APP_API_URL_ROOT}${props.image_url}`}
          objectFit="cover"
          w="100%"
          h="100%"
        />
      </Box>

      <Box ms="2" flex="auto">
        <Heading as="h2" fontSize="md">
          <Text
            as="a"
            href={href}
            textDecoration="underline"
            noOfLines={1}
          >
            {props.title}
          </Text>
        </Heading>

        <Text as="p" noOfLines={2} fontSize="sm">
          {props.body}
        </Text>
      </Box>
    </Flex>
  );
}
