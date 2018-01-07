/**
 * Created by valerie on 1/6/18.
 */
import React from 'react';
import '../App.css';

export default class GraphBody extends React.Component {
    static defaultProps = { multiplier: 20 };

    render() {
        let eventNodes;
        eventNodes = this._getEvents();
        return(
            <g transform="translate(0,0)">
                {eventNodes}
            </g>
        );
    }
    _getEvents() {

        var json = {"event1":{"start":"60","end":"120"},"event2":{"start":"100","end":"240"},"event3":{"start":"700","end":"720"}};
        var arr = [];
        Object.keys(json).forEach(function(key) {
            arr.push(json[key]);
        });
        return <g>{arr.map(item => <Event key={item.start} start={item.start} end={item.end} height={parseInt(item.end,10)-parseInt(item.start,10)}/>)}</g>;

    }
}
class Event extends React.Component {

    render() {
       return <rect x={20} y={this.props.start} width={600} height={this.props.height} fill="none" stroke="black" strokeWidth="2"/>;
    }
}