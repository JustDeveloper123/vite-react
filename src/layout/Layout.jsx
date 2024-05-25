import ReactLogo from '/webp/react.webp';

const Layout = ({ children }) => {
  return (
    <>
      <header>
        <h1>{import.meta.env.APP_TITLE}</h1>
      </header>

      <main>{children}</main>

      <footer>
        <img src={ReactLogo} alt="ReactJS logo" height="100px" />
      </footer>
    </>
  );
};

export default Layout;
