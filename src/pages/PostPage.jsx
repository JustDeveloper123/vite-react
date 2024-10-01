import { Link, useParams } from 'react-router-dom';
import { ROUTES } from '../constants/router-routes';
import Button from '../ui/Button';
import Title from '../ui/TItle';
import classes from './PostPage.module.scss';

const PostPage = () => {
  const { id } = useParams();

  return (
    <div className={classes.post}>
      <Title>PostPage #{id}</Title>
      <Link to={ROUTES.extractStaticPath(r => r.public.home)}>
        <Button className={classes.button}>Back to home</Button>
      </Link>
    </div>
  );
};

export default PostPage;
