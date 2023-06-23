import React, { useState } from 'react';
import ListWithFavorites from './components/ListWithFavorites';
import ErrorMessage from './components/errorMessage/ErrorMessage';
import LoadingState from './components/LoadingState/LoadingState';
import { GlobalStyleWrapper } from './components/StyledGlobal';

const App = () => {
  const [error, setError] = useState(null);
  const [isShowProgressBar, setIsShowProgressBar] = useState(false);

  return (
    <GlobalStyleWrapper>
      {error ? (
        <ErrorMessage />
      ) : (
        <>
          <ListWithFavorites
            setError={setError}
            setIsShowProgressBar={setIsShowProgressBar}
          />
          {isShowProgressBar && <LoadingState />}
        </>
      )}
    </GlobalStyleWrapper>
  );
};

export default App;
