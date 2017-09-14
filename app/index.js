import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Account from './components/account';

import './gobal.scss';

class Application extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="container">
        <Account />
      </div>
    );
  }
}


ReactDOM.render(
<MuiThemeProvider>
  <Application />
</MuiThemeProvider>, document.getElementById('app'));