import * as React from 'react';
import axios from 'axios';
import {
  Box,
  SkeletonCircle,
  SkeletonText,
} from '@chakra-ui/react';
import Post, {
  Props as PostProps,
} from './Post';

export default function Posts() {
  const [posts, setPosts] = React.useState<PostProps[]>([]);

  React.useEffect(() => {
    (async () => {
      try {
        const { data } = await axios({
          method: 'GET',
          url: `${process.env.REACT_APP_API_URL}/posts`,
        });

        setPosts(data);
      } catch (error) {
        if (axios.isAxiosError(error)) {
          console.log(error.response);
        } else {
          console.dir(error);
        }
      }
    })();
  }, []);

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
