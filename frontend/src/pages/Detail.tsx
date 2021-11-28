import * as React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Content from '../components/Content';
import { Post } from '../types';
import useAxios from '../hooks/useAxios';
import {
  Button,
  Flex,
  Image,
  Text,
} from '@chakra-ui/react';

export default function Detail() {
  const params = useParams();
  const postUrl = `${process.env.REACT_APP_API_URL}/posts/${params.id}`;
  const navigate = useNavigate();
  const [post, setPost] = React.useState<Post>();
  const [title, setTitle] = React.useState('詳細');
  const { executeAxios } = useAxios();

  React.useEffect(() => {
    executeAxios<Post>({
      method: 'GET',
      url: postUrl,
    }, ({ data }) => {
      setPost(data);
      setTitle(data.title);
    });
  }, [/* eslint-disable-line react-hooks/exhaustive-deps */])

  const handleClickDelete = async () => {
    executeAxios<Post>({
      method: 'DELETE',
      url: postUrl,
    }, () => {
      // TODO: 確認を挟む
      navigate('/');
    });
  };

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

      <Flex
        mt="4"
        justifyContent="center"
      >
        <Button>
          編集
        </Button>

        <Button
          ms="2"
          bgColor="red"
          onClick={handleClickDelete}
        >
          削除
        </Button>
      </Flex>
    </Content>
  );
}
