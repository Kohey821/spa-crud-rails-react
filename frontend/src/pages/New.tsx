import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import Content from '../components/Content';
import {
  Button,
  FormControl,
  FormLabel,
  FormHelperText,
  Input
} from '@chakra-ui/react';
import axios from 'axios';

function New() {
  const [title, setTitle] = React.useState('');
  const [body, setBody] = React.useState('');
  const [image, setImage] = React.useState<File>();

  const navigate = useNavigate();

  async function handlePost() {
    if (!(title && body && image)) return;

    const { dir, log } = console;

    const data = new FormData();
    data.append('title', title);
    data.append('body', body);
    data.append('image', image);

    try {
      await axios({
        url: `${process.env.REACT_APP_API_URL}/posts`,
        method: 'POST',
        data,
      });

      navigate('/');
    } catch (error) {
      if (axios.isAxiosError(error)) {
        log(error.response?.data);
      } else {
        dir(error);
      }
    }
  }

  return (
    <Content
      title="投函"
    >
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
          accept="image/*, .pdf"
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
    </Content>
  );
}

export default New;
