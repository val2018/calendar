/**
 * Created by valerie on 1/6/18.
 */
import React from 'react';

export default class GraphBody extends React.Component {
    static defaultProps = { multiplier: 20 };

    // prepareData() {
    //
    //     var json = {"event1":{"start":"60","end":"120"},"event2":{"start":"100","end":"240"},"event3":{"start":"700","end":"720"}};
    //     var arr = [];
    //     Object.keys(json).forEach(function(key) {
    //         arr.push(json[key]);
    //     });
    //     return <ul>{arr.map(item => <MyAppChild key={item.start} label={item.start} value={item.end} />)}</ul>;
    //
    //
    //     return d;
    // }


    render() {
        //let d = this.prepareData();
        // return(
        //     <rect x={50}
        //           y={300}
        //           width={100}
        //           height={100}
        //
        //     />
        // )
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
class MyAppChild extends React.Component {
    render() {
        return <rect>{this.props.label + " - " + this.props.value}</rect>;
    }
}