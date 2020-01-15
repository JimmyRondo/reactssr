import classNames from 'classnames';
import * as React from 'react';
import styles from './PreviewImage.scss';

interface Props {
  src: string;
  className?: string;
}
export const PreviewImage = ({ src, className }: Props): React.ReactElement => (
  <img src={src} className={classNames(styles.previewImg, className)} />
);
