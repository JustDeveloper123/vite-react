import { Outlet } from 'react-router-dom';
import Title from '../../ui/Title';
import Container from './Container';
import classes from './Layout.module.scss';

const JSXTile = ({ label, children }) => {
  if (children) {
    return (
      <>
        <span className={classes.jsx}>&lt;{label}&gt;</span>
        {children}
        <span className={classes.jsx}>&lt;&#47;{label}&gt;</span>
      </>
    );
  }
  return <span className={classes.jsx}>&lt;{label}&nbsp;&#47;&gt;</span>;
};

const Layout = () => {
  return (
    <div className={classes.wrapper}>
      <header>
        <Container>
          <Title heading="h1">
            <JSXTile label={'Header'}>{import.meta.env.VITE_TITLE}</JSXTile>
          </Title>
        </Container>
      </header>
      <main className={classes.main}>
        <Outlet />
      </main>
      <footer>
        <Container>
          <Title heading="h3">
            <JSXTile label={'Footer'} />
          </Title>
        </Container>
      </footer>
    </div>
  );
};

export default Layout;
