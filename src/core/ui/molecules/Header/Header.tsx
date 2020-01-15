import { Logo } from '@core/ui/atoms';
import classNames from 'classnames';
import * as React from 'react';
import styles from './Header.scss';

interface Props {
  title: string;
  className?: string;
}

export const Header = ({ title, className }: Props): React.ReactElement => {
  return (
    <header className={classNames(styles.header, className)}>
      <Logo />
      <h1 className={styles.title}>{title}</h1>
    </header>
  );
};
