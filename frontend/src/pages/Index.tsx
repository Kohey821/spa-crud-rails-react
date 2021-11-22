import React from "react";
import axios from "axios";
import Content from "../components/Content";
import {
  Box,
  SkeletonCircle,
  SkeletonText,
} from '@chakra-ui/react';

function Index() {
  const [posts, setPosts] = React.useState([]);

  React.useEffect(() => {
    (async () => {

    })();
  });

  const postLoadings = [];
  for (let i = 0; i < 10; i++) {
    const mt = i !== 0 ? 2 : 0;

    postLoadings.push(
      <Box mt={mt} p="4" boxShadow="lg">
        <SkeletonCircle size="10" />
        <SkeletonText mt="2" noOfLines={4} spacing="2" />
      </Box>
    );
  }

  return (
    <Content
      title="一覧"
    >
      {posts.length
        ? (
          <>
            {posts.map(() => (
              <>
              </>
            ))}
          </>
        )
        : postLoadings
      }
    </Content>
  );
}

export default Index;
