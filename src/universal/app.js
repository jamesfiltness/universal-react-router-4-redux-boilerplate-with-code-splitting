import React from 'react';
import { Link, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

const Home = () => {
  return (
    <div>
      <h2>React Router 4</h2>
      <p>Experimenting with React Router 4 and Redux.</p>
    </div>
  );
}

const ReactRouter = () => {
  return (
    <div>
      <h2>React Router links</h2>
      <ul>
        <li><a href="https://reacttraining.com/react-router">React Router 4</a></li>
        <li>
          <a
            href="https://github.com/ReactTraining/react-router/tree/master/packages/react-router-redux"
          >
            React Router Redux
          </a>
        </li>
      </ul>
    </div>
  );
}

const React16 = (props) => {
  return (
    <div>
      <h2>React 16 links</h2>
      <ul>
        <li><a href="https://reactjs.org/">React 16 docs</a></li>
        <li><a href="https://reactjs.org/blog/2017/09/26/react-v16.0.html">React 16 blog post</a></li>
      </ul>
    </div>
  );
}

const About = ({ match }) => (
  <div>
    <h2>About</h2>
    <ul>
      <li>
        <Link to={`${match.url}/react-router`}>
          React Router 4
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/react-16`}>
          React 16
        </Link>
      </li>
    </ul>
    <Route path={`${match.url}/react-router`} component={ReactRouter} />
    <Route path={`${match.url}/react-16`} component={React16} />
  </div>
);

function mapStateToProps(state) {
  return {
    requiredPackages: state.requiredPackages
  }
}

const App = (props) => {
  return (
    <div>
      <ul className="nav">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
      <Route path="/" exact component={Home}/>
      <Route path="/about" component={About}/>
    </div>
  );
}

export default withRouter(connect(mapStateToProps)(App))
