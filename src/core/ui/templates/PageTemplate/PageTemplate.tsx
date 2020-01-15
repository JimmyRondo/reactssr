import { Header } from '@core/ui/molecules';
import * as React from 'react';
import styles from './PageTemplate.scss';

interface Props {
  title: string;
  children: React.ReactNode;
}

export const PageTemplate = ({ title, children }: Props): React.ReactElement => {
  return (
    <div className={styles.pageTemplate}>
      <Header title={title} />
      {children}
    </div>
  );
};
