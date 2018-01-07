/**
 * Created by valerie on 1/6/18.
 */
import React from 'react';
import '../App.css';

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
        const events = this._getEvents() || [];
        let eventNodes;
        eventNodes = <div className="event-list">{events}</div>
        return(


            <div className="event-box">




                {eventNodes}
            </div>
        );
    }
    _getEvents() {

        var json = {"event1":{"start":"60","end":"120"},"event2":{"start":"100","end":"240"},"event3":{"start":"700","end":"720"}};
        var arr = [];
        Object.keys(json).forEach(function(key) {
            arr.push(json[key]);
        });
        return <svg>{arr.map(item => <MyAppChild key={item.start} label={item.start} value={item.end} />)}</svg>;

    }
}
class MyAppChild extends React.Component {
    render() {

        return <rect x={this.props.label} y={this.props.value} width={150} height={20}/>;
    }
}