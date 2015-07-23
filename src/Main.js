var React = require('react')
var ThemeManager = require('material-ui/lib/styles/theme-manager')()
import {AppBar, Avatar, Card, CardHeader, CardText, CardMedia, CardTitle, Dialog, FlatButton, TextField, IconButton} from 'material-ui'
import Posts from '../utils/Posts'
import {ColumnLayout} from 'react-components-9dots'
import LocalStorageMixin from 'react-localstorage'

var styles = {
  card: {
    margin: 20,
    backgroundColor: 'lemonchiffon'
  },
  textfield: {
    margin: '10px 5px'
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
    var icon = <IconButton onClick={this.showDialog} iconClassName='material-icons'>note_add</IconButton>
    return (
      <div>
        <AppBar title='Example website' iconElementRight={icon} />
        <ColumnLayout cards={posts} />
        <Dialog ref= 'dialog'>
          <form>
            <TextField ref= 'author' hintText='Author Name' />
            <TextField ref= 'content' hintText='Anytime' />
            <TextField ref= 'image' hintText='Image' />
            <TextField ref= 'title' hintText='Website Inertent' />
            <TextField ref= 'subtitle' hintText='Suubtitle' />
          </form>
          <FlatButton label='Submit' primary={true} onClick={this.submitPost} />
          <FlatButton label='Cancel' secondary={true} onClick={this.hideDialog} />
        </Dialog>
      </div>
    )
  },
  
  showDialog: function () {
    this.refs.addPost.show()
  },
  
  hideDialog: function () {
    this.refs.addPost.dismiss()
  },
  
  submitPost: function () {
   var post = {
     author: this.refs.author.getValue(),
     title: this.refs.title.getValue(),
     subtitle: this.refs.subtitle.getValue(),
     image: this.refs.image.getValue(),
     content: this.refs.content.getValue(),
     time: new Date()
   }
   this.setState({
     posts: this.state.posts.concat([post])
   })
   this.refs.addPost.dismiss()
  }

})


React.render(<App/>, document.body)
