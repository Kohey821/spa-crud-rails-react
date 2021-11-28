import * as React from 'react';
import useAxios from '../hooks/useAxios';
import {
  Box,
  SkeletonCircle,
  SkeletonText,
} from '@chakra-ui/react';
import { PostProps } from '../types';
import Post from './Post';

export default function Posts() {
  const [posts, setPosts] = React.useState<PostProps[]>([]);
  const { executeAxios } = useAxios();
  React.useEffect(() => {
    executeAxios<PostProps[]>({
      method: 'GET',
      url: `${process.env.REACT_APP_API_URL}/posts`,
    }, ({ data }) => {
      setPosts(data);
    });
  }, [/* eslint-disable-line react-hooks/exhaustive-deps */]);

  const postSkeletons = [];
  for (let i = 0; i < 10; i++) {
    const mt = i !== 0 ? 2 : 0;

    postSkeletons.push(
      <Box key={i} mt={mt} p="4" boxShadow="lg">
        <SkeletonCircle size="10" />
        <SkeletonText mt="2" noOfLines={4} spacing="2" />
      </Box>
    );
  }

  return (
    <>
      {posts.length
        ? (
          <>
            {posts.map((post) => (
              <Box key={post.id}>
                <Post {...post} />
              </Box>
            ))}
          </>
        )
        : postSkeletons
      }
    </>
  );
}
