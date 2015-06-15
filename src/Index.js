var React = require('react'),
    $ = require('jquery'),
    ThemeManager = require('material-ui/lib/styles/theme-manager')(),
    Header = require('lib/components/Header')
    
var App = React.createClass({
  
  // Change this
  render: function () {
    return (
      <div style={styles}> 
        Hello World
        <Header />
      </div>
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
  }
  
})

module.exports = App

var styles = {
  backgroundColor:'lightblue',
  fontSize:22
}

$(document).ready(function(){
  React.render(<App />, document.getElementById('container'))
})
