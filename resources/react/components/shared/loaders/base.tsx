import React, { Fragment } from 'react';

export interface BaseLoaderProps {
  error: any,
  retry: any,
  timedOut: boolean,
  pastDelay: number,
}

export default ({
  error,
  retry,
  timedOut,
  pastDelay,
}: BaseLoaderProps) => {
  if (error) {
    return (
      <div>
        <h1>Error!</h1>
        <button type="button" onClick={retry}>Retry</button>
      </div>
    );
  }

  if (timedOut) {
    return (
      <div>
        <h1>Taking a long time...</h1>
        <button type="button" onClick={retry}>Retry</button>
      </div>
    );
  }

  if (pastDelay) {
    return <div>Loading...</div>;
  }

  return <Fragment />;
};
