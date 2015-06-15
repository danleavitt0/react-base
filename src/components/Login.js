var React = require('react')
var Radium = require('radium')
var mui = require('material-ui')
var FlatButton = mui.FlatButton

var Login = React.createClass({
    getStyles: function () {
      var styles = {
        button: {
          backgroundColor: 'pink',
          color: 'white'
        }
      }
      return styles
    },
    render: function () {
      var styles = this.getStyles()
      return (
        <FlatButton style={styles.button}> Login </FlatButton>
      )
    }
})

module.exports = Radium(Login)
