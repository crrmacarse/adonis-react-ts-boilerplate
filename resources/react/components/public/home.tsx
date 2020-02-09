import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div>
    <p>Hello World!</p>
    <p>SSR IN ACTION:</p>
    <Link to="/ssr">Visit this route and check its page source</Link>
  </div>
);

export default Home;
