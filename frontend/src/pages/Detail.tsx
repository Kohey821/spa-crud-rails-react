import * as React from 'react';
import { useParams } from 'react-router-dom';
import Content from '../components/Content';
import { Props as PostProps } from '../components/Post';
import useAxios from '../hooks/useAxios';
import {
  Image,
  Text,
} from '@chakra-ui/react';

export default function Detail() {
  const params = useParams();
  const [post, setPost] = React.useState<PostProps>();
  const [title, setTitle] = React.useState('詳細');
  const { executeAxios } = useAxios();
  React.useEffect(() => {
    executeAxios<PostProps>({
      method: 'GET',
      url: `${process.env.REACT_APP_API_URL}/posts/${params.id}`,
    }, ({ data }) => {
      setPost(data);
      setTitle(data.title);
    });
  }, [/* eslint-disable-line react-hooks/exhaustive-deps */])

  return (
    <Content
      title={title}
    >
      {post && (
        <>
          {post.image_url && (
            <Image
              mt="2"
              src={`${process.env.REACT_APP_API_URL_ROOT}${post.image_url}`}
            />
          )}

          <Text as="p" mt="2">
            {post.body}
          </Text>
        </>
      )}
    </Content>
  );
}
