import { useParams } from 'react-router-dom';
import Content from '../components/Content';

export default function Detail() {
  const params = useParams();

  return (
    <Content
      title="詳細"
    >
      {params.id}
    </Content>
  );
}
