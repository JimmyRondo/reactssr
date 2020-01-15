import classNames from 'classnames';
import * as React from 'react';
import styles from './ErrorMessage.scss';

interface Props {
  message: string;
  className?: string;
}

export const ErrorMessage = ({ message, className }: Props): React.ReactElement => (
  <div className={classNames(styles.errorMessage, className)}>{message}</div>
);
