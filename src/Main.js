var React = require('react')
var ThemeManager = require('material-ui/lib/styles/theme-manager')()

var App = React.createClass({

  childContextTypes: {
    muiTheme: React.PropTypes.object
  },

  getChildContext: function() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    }
  },

  render: function () {
    return (
      <div> Hello World </div>
    )
  }

})


React.render(<App/>, document.body)
