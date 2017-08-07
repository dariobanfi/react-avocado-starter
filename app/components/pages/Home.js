import React from 'react';
import Helmet from 'react-helmet';

const Home = () =>
  (<div>
    <Helmet>
      <title>Home</title>
    </Helmet>

    <h2>Welcome!</h2>

    <p>
      react-avocado-starter contains all the build tooling and configuration you need to kick off
      your next universal React project.
    </p>
  </div>);

export default Home;
