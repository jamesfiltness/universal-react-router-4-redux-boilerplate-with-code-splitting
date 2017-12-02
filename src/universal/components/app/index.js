import React from 'react';
import { Link, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import { bindActionCreators } from 'redux';

import * as appActions from '../../actions/app';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.props.history.listen((location, action) => {
      this.props.historyLocationChange(location); 
    });
  }

  render() {
    return (
      <div>
        {renderRoutes(this.props.route.routes, this.props)}
        <ul className="nav">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    text: state.pageData.text,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(appActions, dispatch);
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App))
