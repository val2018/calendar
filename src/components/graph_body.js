/**
 * Created by valerie on 1/6/18.
 */
import React from 'react';
import '../App.css';

export default class GraphBody extends React.Component {
    static defaultProps = { multiplier: 20 };

    render() {
        const events = this._getEvents() || [];
        let eventNodes;
        eventNodes = this._getEvents();
        return(


            <g className="event-box">
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
        return <g>{arr.map(item => <Event key={item.start} label={item.start} value={item.end} />)}</g>;

    }
}
class Event extends React.Component {
    render() {

        return <rect x={this.props.label} y={this.props.value} width={150} height={20}/>;
    }
}