import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { Post as PostOriginal } from '../types';
import {
  Button,
  FormControl,
  FormLabel,
  FormHelperText,
  Image,
  Input,
} from '@chakra-ui/react';
import useAxios from '../hooks/useAxios';

type Post = PostOriginal & {
  successCallback?: () => void
};

export default function PostForm(props: Partial<Post>) {
  const [title, setTitle] = React.useState(
    props.title ? props.title : ''
  );
  const [body, setBody] = React.useState(
    props.body ? props.body : ''
  );
  const [image, setImage] = React.useState<File>();
  const { executeAxios } = useAxios();
  const navigate = useNavigate();

  const handlePost = async () => {
    if (!(title && body)) return;

    const data = new FormData();
    data.append('title', title);
    data.append('body', body);
    image && data.append('image', image);

    const url = `${process.env.REACT_APP_API_URL}/posts${
      props.id ? `/${props.id}` : ''
    }`;

    const method = props.id ? 'PATCH' : 'POST';

    executeAxios<Post>({
      url,
      method,
      data,
    }, () => {
      if (props.id) {
        props.successCallback && props.successCallback();
      } else {
        navigate('/');
      }
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
          value={title}
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
          value={body}
          onChange={
            (e) => setBody(e.target.value)
          }
        />
      </FormControl>

      {props.image_url && (
        <Image
          src={`${process.env.REACT_APP_API_URL_ROOT}${props.image_url}`}
          mt="2"
        />
      )}

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
          color="white"
          disabled={!(title && body)}
        >
          送信
        </Button>
      </FormControl>
    </>
  );
}
