'use strict';

var React = require('react');
var Radium = require('radium');
var mui = require('material-ui');
var FlatButton = mui.FlatButton;

var Login = React.createClass({
  displayName: 'Login',

  getStyles: function getStyles() {
    var styles = {
      button: {
        backgroundColor: 'pink',
        color: 'white'
      }
    };
    return styles;
  },
  render: function render() {
    var styles = this.getStyles();
    return React.createElement(
      FlatButton,
      { style: styles.button },
      ' Login '
    );
  }
});

module.exports = Radium(Login);