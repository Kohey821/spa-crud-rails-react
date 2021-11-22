import * as React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

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
    <>
      <p>
        タイトル:{' '}
        <input
          type="text"
          name="title"
          onChange={
            (e) => setTitle(e.target.value)
          }
        />
      </p>

      <p>
        本文:{' '}
        <input
          type="text"
          name="body"
          onChange={
            (e) => setBody(e.target.value)
          }
        />
      </p>

      <p>
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
        <label htmlFor="image">画像を選択</label>
      </p>

      {image?.name && (
        <p>
          選択中の画像:{' '}
          {image.name}
        </p>
      )}

      <p>
        <button
          onClick={handlePost}
        >
          投函
        </button>
      </p>
    </>
  );
}

export default New;
