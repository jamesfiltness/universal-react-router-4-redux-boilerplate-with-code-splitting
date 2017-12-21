import React from 'react';
import { Link, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import { bindActionCreators } from 'redux';

import * as appActions from '../../actions/app';

class App extends React.Component {
  constructor(props) {
    super(props);
    // TODO: Maybe this shouldn't live in the App component
    this.props.history.listen((location, action) => {
      this.props.historyLocationChange(location);
    });
  }

  render() {
    return (
      <div className="app">
        <ul className="nav">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
        {renderRoutes(this.props.route.routes, this.props)}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    title: state.pageData.title,
    text: state.pageData.text,
    dataFetching: state.dataLoading,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(appActions, dispatch);
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App))
