import React from 'react';
import { Link, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { renderRoutes } from 'react-router-config';

function mapStateToProps(state) {
  return {
    requiredPackages: state.requiredPackages
  }
}

const App = (props) => {
  return (
    <div>
      {renderRoutes(props.route.routes)}
      <ul className="nav">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
    </div>
  );
}

export default withRouter(connect(mapStateToProps)(App))
