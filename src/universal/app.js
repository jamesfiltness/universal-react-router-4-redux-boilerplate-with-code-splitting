import React from 'react';
import { Link, Route } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

const About = () => (
  <div>
    <h2>About</h2>
  </div>
);

const App = () => (
  <div>
    <ul className="nav">
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About</Link></li>
    </ul>
    <Route path="/" exact component={Home}/>
    <Route path="/about" component={About}/>
  </div>
);

export default App;
