import React from 'react'
import Radium from 'radium'
import {FlatButton} from 'material-ui'

class Login extends React.Component {

  getStyles () {
    var styles = {
      button: {
        backgroundColor: 'pink',
        color: 'white',
        ':hover':{
          boxShadow:'0 0 3px 0 rgba(0,0,0,0.13), 0 3px 6px rgba(0,0,0,0.26)'
        }
      }
    }
    return styles
  }

  render () {
    var styles = this.getStyles()
    console.log(this.props.style)
    return (
      <FlatButton style={[
        styles.button,
        this.props.style
      ]}> Login 
      </FlatButton>
    )
  }

}

Login.propTypes = {
  style:React.PropTypes.object
}
Login.defaultProps = {
  style: {}
}

export default Radium(Login)