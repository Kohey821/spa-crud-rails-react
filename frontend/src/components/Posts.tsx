import * as React from 'react';
import useAxios from '../hooks/useAxios';
import {
  Box,
  SkeletonCircle,
  SkeletonText,
  Text,
} from '@chakra-ui/react';
import { Post as PostType } from '../types';
import Post from './Post';

export default function Posts() {
  const [postsAreReady, setPostsAreReady] = React.useState(false);
  const [posts, setPosts] = React.useState<PostType[]>([]);
  const { executeAxios } = useAxios();
  React.useEffect(() => {
    executeAxios<PostType[]>({
      method: 'GET',
      url: `${process.env.REACT_APP_API_URL}/posts`,
    }, ({ data }) => {
      setPosts(data);
      setPostsAreReady(true);
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
      {postsAreReady
        ? posts.length
          ? (
            <>
              {posts.map((post, index) => (
                <Box
                  key={post.id}
                  mt={index !== 0 ? '2' : ''}
                >
                  <Post {...post} />
                </Box>
              ))}
            </>
          )
          : (
            <Text as="p">
              一覧できるものがありません...
            </Text>
          )
        : postSkeletons
      }
    </>
  );
}
