var React = require('react')
var $ = require('jquery')
var ThemeManager = require('material-ui/lib/styles/theme-manager')()
var Header = require('lib/components/Header')

var App = React.createClass({

  // Change this
  render: function () {
    return (
      <div>
        <Header />
      </div>
    )
  },

  // Don't touch this
  childContextTypes: {
    muiTheme: React.PropTypes.object
  },
  getChildContext: function () {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    }
  }

})

module.exports = App

$(document).ready(function () {
  React.render(<App />, document.getElementById('container'))
})
