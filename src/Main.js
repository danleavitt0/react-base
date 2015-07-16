var React = require('react')
var ThemeManager = require('material-ui/lib/styles/theme-manager')()
import {Avatar, Card, CardHeader, CardText, CardMedia, CardTitle} from 'material-ui'

var styles = {
  card: {
    width: 350,
    margin: 15
  }
}

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
        <Card style={styles.card}>
          <CardHeader title="Daniel" subtitle="Today at 1:07pm" avatar={<Avatar>D</Avatar>} />
          <CardMedia>
            <img src="" />
          </CardMedia>
          <CardTitle title="Wooooo" subtitle="exciting" />
          <CardText>
            This is a lot of text
          </CardText>
        </Card>
      </div>
    )
  }

})


React.render(<App/>, document.body)
