var React = require('react')
var ThemeManager = require('material-ui/lib/styles/theme-manager')()
import {Card, ColumnLayout, Header, CardTitle} from 'react-components-9dots'
import {AppBar, FlatButton} from 'material-ui'

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
        <Header title="Example" />
        <FlatButton />
      </div>
    )
  }

})


React.render(<App/>, document.body)
