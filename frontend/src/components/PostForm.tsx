import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { PostProps } from '../types';
import {
  Button,
  FormControl,
  FormLabel,
  FormHelperText,
  Input
} from '@chakra-ui/react';
import useAxios from '../hooks/useAxios';

export default function PostForm() {
  const [title, setTitle] = React.useState('');
  const [body, setBody] = React.useState('');
  const [image, setImage] = React.useState<File>();
  const { executeAxios } = useAxios();

  const navigate = useNavigate();

  const handlePost = async () => {
    if (!(title && body)) return;

    const data = new FormData();
    data.append('title', title);
    data.append('body', body);
    image && data.append('image', image);

    executeAxios<PostProps>({
      url: `${process.env.REACT_APP_API_URL}/posts`,
      method: 'POST',
      data,
    }, () => {
      navigate('/');
    });
  }

  return (
    <>
      <FormControl>
        <FormLabel>
          タイトル
        </FormLabel>

        <Input
          type="text"
          name="title"
          onChange={
            (e) => setTitle(e.target.value)
          }
        />
      </FormControl>

      <FormControl mt="2">
        <FormLabel>
          本文
        </FormLabel>

        <Input
          type="text"
          name="body"
          onChange={
            (e) => setBody(e.target.value)
          }
        />
      </FormControl>

      <FormControl mt="2">
        <input
          type="file"
          name="image"
          id="image"
          style={{
            display: 'none',
          }}
          accept="image/*"
          onChange={
            (e) => setImage(
              e.target.files
                ? e.target.files[0]
                : undefined
            )
          }
        />
        <Button
          as="label"
          htmlFor="image"
        >
          画像を選択
        </Button>

        {image?.name && (
          <FormHelperText>
            選択中の画像:{' '}
            {image.name}
          </FormHelperText>
        )}
      </FormControl>

      <FormControl mt="2">
        <Button
          onClick={handlePost}
          bgGradient="linear(to-tr, pink.500, purple.500)"
        >
          投函
        </Button>
      </FormControl>
    </>
  );
}
