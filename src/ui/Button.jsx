import { cva } from 'class-variance-authority';
import clsx from 'clsx';
import classes from './Button.module.scss';

const buttonVariants = cva(classes.button, {
  variants: {
    variant: {
      rounded: classes.button_rounded,
    },
  },
});

const Button = ({ variant, lineColor, className, children, ...rest }) => {
  return (
    <button
      {...rest}
      className={clsx(
        buttonVariants({
          variant,
        }),
        className,
      )}
    >
      <span>{children}</span>
      <div className={classes.button__background}>
        <div
          className={classes.button__line}
          style={{
            backgroundColor: lineColor || 'rgb(255, 255, 255, 0.2)',
          }}
        ></div>
      </div>
    </button>
  );
};

export default Button;
