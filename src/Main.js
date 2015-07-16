var React = require('react')
var ThemeManager = require('material-ui/lib/styles/theme-manager')()
import {Avatar, Card, CardHeader, CardText, CardMedia, CardTitle} from 'material-ui'

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
      <div>

      </div>
    )
  }

})


React.render(<App/>, document.body)
