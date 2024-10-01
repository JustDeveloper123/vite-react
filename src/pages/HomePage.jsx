import { Link } from 'react-router-dom';
import Container from '../components/Layout/Container';
import { CAT_IMG } from '../constants/images';
import { ROUTES } from '../constants/router-routes';
import Button from '../ui/Button';
import classes from './HomePage.module.scss';

const themes = [
  { theme: 'light', color: 'white' },
  { theme: 'dark', color: 'var(--gray-800)' },
  { theme: 'green', color: '#38b000' },
];

const changeTheme = toTheme => {
  if (document.documentElement.classList.contains(`theme-${toTheme}`)) return;
  localStorage.setItem('theme', toTheme);

  const removeOtherThemes = () => {
    themes
      .map(({ theme }) => theme)
      .forEach(t => document.documentElement.classList.remove(`theme-${t}`));
  };

  if (toTheme === 'light') {
    removeOtherThemes();
    return;
  }

  removeOtherThemes();
  document.documentElement.classList.add(`theme-${toTheme}`);
};

const HomePage = () => {
  //!!! add container CVA
  return (
    <Container variant={'tablet'} className={classes.container}>
      <div className={classes.img}>
        <img src={CAT_IMG} alt="Cat.png :)" className={classes.animate_spin} />
      </div>
      <h1 className={classes.themeLabel}>Switch theme:</h1>
      <div className={classes.themesList}>
        {themes.map(({ theme, color }) => (
          <Button
            key={theme}
            onClick={() => changeTheme(theme)}
            variant={'rounded'}
            lineColor={theme === 'light' ? 'rgba(0, 0, 0, 0.15)' : false}
            style={{
              backgroundColor: color,
            }}
          />
        ))}
      </div>
      <Link to={ROUTES.extractStaticPath(r => r.public.post) + '/1'}>
        <Button>Post 1</Button>
      </Link>
    </Container>
  );
};

export default HomePage;
