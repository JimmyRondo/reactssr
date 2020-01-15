import classNames from 'classnames';
import * as React from 'react';
import styles from './Button.scss';

interface Props {
  text?: string;
  className?: string;
  children?: React.ReactNode;
  onClick?: (e: React.SyntheticEvent<HTMLButtonElement>) => void;
}

export const Button = ({ onClick, text, children, className }: Props): React.ReactElement => {
  return (
    <button onClick={onClick} className={classNames(styles.button, className)}>
      {text || children}
    </button>
  );
};
