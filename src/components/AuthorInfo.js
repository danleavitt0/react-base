import React from 'react'

export default class AuthorInfo extends React.Component {

  getStyles () {
    var styles = {
      image: {
        height: 30,
        width: 30,
        borderRadius: 2
      }
    }
    return styles
  }

  render () {
    var styles = this.getStyles()
    return (
      <div>
        <img style={styles.image} src='profile'/>
        <div>
          <p> {this.props.author} </p>
          <p> {this.props.time} </p>
        </div>
      </div>
    )
  }

}

AuthorInfo.propTypes = {
  author: React.PropTypes.string,
  time: React.PropTypes.string
}

AuthorInfo.contextTypes = {
  muiTheme: React.PropTypes.object
}
