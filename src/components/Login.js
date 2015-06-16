import React from 'react'
import {FlatButton} from 'material-ui'

export default class Login extends React.Component {

  getStyles () {
    var styles = {
      button: {
        backgroundColor: 'pink',
        color: 'white'
      }
    }
    return styles
  }

  render () {
    var styles = this.getStyles()
    return (
      <FlatButton style={styles.button}> Login </FlatButton>
    )
  }

}
