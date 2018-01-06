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

class Event extends React.Component {
    render() {
        return(
            <div className="event">
                <p className="event-header">{this.props.start}</p>
                <p className="event-body">
                    {this.props.end}
                </p>
            </div>
        );
    }
}
class MyAppChild extends React.Component {
    render() {
        return <li>{this.props.label + " - " + this.props.value}</li>;
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
          { id: 1, author: 'Clu', body: 'Just say no to love!' },
          { id: 2, author: 'Anne Droid', body: 'I wanna know what love is...' }
        ];

        return commentList.map((comment) => {
          return (<Comment
              author={comment.author}
              body={comment.body}
              key={comment.id} />);
        });
    }

    _getEvents() {

        const eventList = {
            event1: {start: 60, end: 120},  // an event from 10am to 11am
            event2: {start: 100, end: 240}, // an event from 10:40am to 1pm
            event3: {start: 700, end: 720}  // an event from 8:40pm to 9pm
        }

        return eventList.map((event) => {
            return (<Event
                start={event.start}
                end={event.end}
                key={event.id} />);
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
class EventBox extends React.Component {

    render() {

        const comments = this._getEvents() || [];
        let commentNodes;
        commentNodes = <div className="comment-list">{comments}</div>
        return(

            <div className="comment-box">

                <h3>Events</h3>


                {commentNodes}
            </div>
        );
    }
    _getEvents() {

        var json = {"event1":{"start":"60","end":"120"},"event2":{"start":"100","end":"240"},"event3":{"start":"700","end":"720"}};
        var arr = [];
        Object.keys(json).forEach(function(key) {
            arr.push(json[key]);
        });
        return <ul>{arr.map(item => <MyAppChild key={item.start} label={item.start} value={item.end} />)}</ul>;

    }




}
//export default App;
//export default Comment;
export default EventBox;