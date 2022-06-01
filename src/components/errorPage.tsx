import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = (): React.ReactElement => {
  return (
    <>
      <div className="mainbox">
        <div className="err">4</div>
        <i className="far fa-question-circle fa-spin"></i>
        <div className="err2">4</div>
        <div className="msg" role="errorMessage">
          Maybe this page moved? Got deleted? Is hiding out in quarantine? Never existed in the first place?
          <p>
            Lets go <Link to="/">home</Link> and try from there.
          </p>
        </div>
      </div>
    </>
  );
};

export default ErrorPage;
