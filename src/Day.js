import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

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
          { id: 1, author: 'Day 1', body: 'Day script comment 1' },
          { id: 2, author: 'Day 2', body: 'Day script comment 2' }
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
                <div>YOYOYO don't miss out!</div>
            )
        }

    }
}
// export default App;
// export default Comment;
export default CommentBox;