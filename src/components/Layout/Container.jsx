import { cva } from 'class-variance-authority';
import clsx from 'clsx';
import classes from './Container.module.scss';

const containerVariants = cva(classes.container, {
  variants: {
    variant: {
      base: classes.container_main,
      tablet: classes.container_tablet,
    },
  },
  defaultVariants: {
    variant: 'base',
  },
});

const Container = ({ variant, className, children, ...rest }) => {
  return (
    <div {...rest} className={clsx(containerVariants({ variant }), className)}>
      {children}
    </div>
  );
};

export default Container;
