/**
 * Created by valerie on 1/6/18.
 */
import React from 'react';

export default class GraphBody extends React.Component {
    static defaultProps = { multiplier: 20 };

    // prepareData() {
    //     // let d = [`M ${this.props.x} ${this.props.y}`];
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
        return(
            <rect x={50}
                  y={300}
                  width={100}
                  height={100}

            />
        )
    }
}