import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

// create a new component
// class App extends Component {
//   //App is a new class, Component is React.Component which we inherit from
//   render() {
//     const topicsList = ['HTML', 'Javascript', 'React'];
//     // render function returns jx code
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to React</h1>
//         </header>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//         <div>
//           <ul>
//             {topicsList.map( topic => <li>{topic}</li> )}
//           </ul>
//         </div>
//
//
//       </div>
//     );
//   }
// }
class Comment extends React.Component {
  render() {
      return(
          <div className="comment">

              <img src={this.props.avatarUrl} alt={`${this.props.author}'s picture`} />

              <p className="comment-header">{this.props.author}</p>
              <p className="comment-body">
                  {this.props.body}
              </p>
              <div className="comment-actions">
                  <a href="#">Delete comment</a>
              </div>
          </div>
      );
  }
}
class CommentBox extends React.Component {

    constructor() {
        super();

        this.state = {
            showComments: false
        };
    }
    render() {
        let buttonText = 'Show comments';

        const comments = this._getComments() || [];
        let commentNodes;
        if (this.state.showComments) {
            buttonText = 'Hide comments';
            commentNodes = <div className="comment-list">{comments}</div>
        }
        return(

            <div className="comment-box">
                <button onClick={this._handleClick.bind(this)}>{buttonText}</button>
                <h3>Comments</h3>
                {this._getPopularMessage(comments.length)}
                <h4 className="comment-count">{this._getCommentsTitle(comments.length)}</h4>
                {commentNodes}
            </div>
        );
    }
    _handleClick() {
        this.setState({
            showComments: !this.state.showComments
        });
    }

    _getComments() {

        const commentList = [
          { id: 1, author: 'Clu', body: 'Just say no to love!', avatarUrl: 'images/default-avatar.png' },
          { id: 2, author: 'Anne Droid', body: 'I wanna know what love is...', avatarUrl: 'images/default-avatar.png' }
        ];

        return commentList.map((comment) => {
          return (<Comment
              author={comment.author}
              body={comment.body}
              avatarUrl={comment.avatarUrl}
              key={comment.id} />);
        });
    }

    _getCommentsTitle(commentCount) {
        if (commentCount === 0) {
          return 'No comments yet';
        } else if (commentCount === 1) {
          return '1 comment';
        } else {
          return `${commentCount} comments`;
        }
    }

    _getPopularMessage(commentCount) {
        const POPULAR_COUNT = 1;

        if(commentCount > POPULAR_COUNT) {
            return (
                <div>This post is getting really popular, don't miss out!</div>
            )
        }

    }
}
// export default App;
// export default Comment;
export default CommentBox;