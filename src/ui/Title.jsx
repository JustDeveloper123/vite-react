import clsx from 'clsx';
import classes from './Title.module.scss';

const Title = ({ heading = 'h1', className, children, ...rest }) => {
  const TitleTag = heading;

  return (
    <TitleTag className={clsx(classes.title, className)} {...rest}>
      {children}
    </TitleTag>
  );
};

export default Title;
