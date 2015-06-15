'use strict';

var React = require('react');
var $ = require('jquery');
var ThemeManager = require('material-ui/lib/styles/theme-manager')();
var Header = require('lib/components/Header');

var App = React.createClass({
  displayName: 'App',

  // Change this
  render: function render() {
    return React.createElement(
      'div',
      null,
      React.createElement(Header, null)
    );
  },

  // Don't touch this
  childContextTypes: {
    muiTheme: React.PropTypes.object
  },
  getChildContext: function getChildContext() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  }

});

module.exports = App;

$(document).ready(function () {
  React.render(React.createElement(App, null), document.getElementById('container'));
});