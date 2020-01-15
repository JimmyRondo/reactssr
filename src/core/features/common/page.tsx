import { Align, Button, ErrorMessage, PreviewImage } from '@core/ui/atoms';
import * as React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { getUser } from './effects';
import { userErrorSelector, userFetchedSelector, userSelector } from './selectors';
import { User } from './types';

interface CommonPageProps {
  user?: User;
  error?: string;
  fetched: boolean;
  onClick: (name: string) => void;
}

const mapStateToProps = createStructuredSelector({
  user: userSelector,
  fetched: userFetchedSelector,
  error: userErrorSelector,
});

const enhance = connect(mapStateToProps, { onClick: getUser });

export const CommonPage = ({ user, fetched, onClick, error }: CommonPageProps): React.ReactElement => {
  return (
    <React.Fragment>
      {user && (
        <React.Fragment>
          <h1>{user.login} avatar:</h1>
          <PreviewImage src={user.avatar_url} />
        </React.Fragment>
      )}
      <Align>
        <Button onClick={(): void => onClick('qwerty')}>load another user</Button>
        <Button onClick={(): void => onClick('wronguserlogin')}>get error message</Button>
      </Align>
      {fetched && <span>fetching...</span>}
      {error && <ErrorMessage message={error} />}
    </React.Fragment>
  );
};

export const CommonPageContainer = enhance(CommonPage);
