import image from '@core/assets/images/logo.svg';
import * as React from 'react';
import styles from './Logo.scss';

export const Logo = (): React.ReactElement => <img src={image} className={styles.logo} alt="logo" />;
