var React = require('react'),
    $ = require('jquery'),
    ThemeManager = require('material-ui/lib/styles/theme-manager')(),
    Header = require('components/Header')
    
var App = React.createClass({displayName: "App",
  
  // Change this
  render: function () {
    return (
      React.createElement("div", null, 
        "Hello World", 
        React.createElement(Header, null)
      )
    )
  },
  
  // Don't touch this
  childContextTypes: {
    muiTheme: React.PropTypes.object
  },
  getChildContext: function() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    }
  },
  
})

var styles = {
  
}

$(document).ready(function(){
  React.render(React.createElement(App, null), document.getElementById('container'))
})
