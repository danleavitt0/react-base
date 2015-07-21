var React = require('react')
var ThemeManager = require('material-ui/lib/styles/theme-manager')()
import {AppBar, Avatar, Card, CardHeader, CardText, CardMedia, CardTitle, Dialog, FlatButton, TextField, IconButton} from 'material-ui'
import Posts from '../utils/Posts'
import LocalStorageMixin from 'react-localstorage'
import {ColumnLayout} from 'react-components-9dots'

var styles = {
  card: {
    margin: 20,
    backgroundColor: 'lemonchiffon'
  },
  header: {
    backgroundColor: 'lightblue'
  },
  container: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    flexWrap: 'wrap'
  }
}

var App = React.createClass({
  
  mixins: [LocalStorageMixin],

  getInitialState: function() {
    return {
      posts: Posts
    }
  },
  
  childContextTypes: {
    muiTheme: React.PropTypes.object
  },
  
  getInitialState: function () {
    return ({
      posts:Posts
    })
  },

  getChildContext: function() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    }
  },

  render: function () {
    var posts = this.state.posts.map(function (post) {
      return (
        <Card style={styles.card}>
          <div>
            <CardHeader title={post.author} subtitle={post.time} avatar={<Avatar>{post.author[0]}</Avatar>} />
            <CardMedia>
              <img src={post.image} />
            </CardMedia>
            <CardTitle title={post.title} subtitle={post.subtitle} />
            <CardText>
              {post.content}
            </CardText>
          </div>
        </Card>
      )
    })
    return (
      <div>
        <AppBar title='Example website' />
        <ColumnLayout cards={posts} />
      </div>
    )
  },
  
  showDialog: function () {
    
  },
  
  hideDialog: function () {
    
  },
  
  submitPost: function () {
    
  }

})


React.render(<App/>, document.body)
