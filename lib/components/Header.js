'use strict';

var React = require('react');
var Radium = require('radium');
var Login = require('lib/components/Login');

var Header = React.createClass({
  displayName: 'Header',

  render: function render() {
    return React.createElement(
      'div',
      { style: styles.base },
      React.createElement(
        'h1',
        { style: styles.header },
        'Header'
      ),
      React.createElement(Login, null),
      React.createElement('input', null)
    );
  }

});

var styles = {
  base: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 0 3px rgba(0,0,0,0.13)',
    padding: 20,
    backgroundColor: 'lightblue',
    color: 'white'
  },
  header: {
    flex: 1,
    margin: 0
  }
};

module.exports = Radium(Header);