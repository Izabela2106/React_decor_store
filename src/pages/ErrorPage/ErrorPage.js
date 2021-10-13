import React from 'react';
import { Link } from 'react-router-dom';

import Wrapper from 'pages/ErrorPage/ErrorPageWrapper';
import error from 'assets/images/error.jpg';

const ErrorPage = () => (
  <Wrapper>
    <div className="section-center">
      <img alt="pic" src={error} />
    </div>
    <Link to="/" className="btn">
      go shopping
    </Link>
  </Wrapper>
);

export default ErrorPage;
