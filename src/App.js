import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import React, { Component } from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import Dialog from 'material-ui/Dialog';
import IconMenu from 'material-ui/IconMenu';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Paper from 'material-ui/Paper';
import IconButton from 'material-ui/IconButton';
import Slider from 'material-ui/Slider';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import Checkbox from 'material-ui/Checkbox'
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton'
import TextField from 'material-ui/TextField'

class App extends Component {
  constructor(){
    super();
    this.state={
      drawerOpen: false,
    }
  }

  toggleDrawer = () => {
		this.setState({
			drawerOpen: !this.state.drawerOpen,
		});
	}
  
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <AppBar title="Exercise 2.2"
          onLeftIconButtonTouchTap={this.toggleDrawer}
          >
          </AppBar>
          <Drawer open={this.state.drawerOpen}>
            <MenuItem onTouchTap={this.toggleDrawer}>Hide drawer</MenuItem>
          </Drawer>
          First name: <TextField /> <br/ >
          Last name: <TextField /> <br/ >
          Birth town: <TextField /> <br/ >
          Birth year: <TextField />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
