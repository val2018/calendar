/**
 * Created by valerie on 1/6/18.
 */
import React from 'react';

export default class Axis extends React.Component {
    prepareCords() {
        let coords = {
            x1: this.props.x,
            y1: this.props.y,
            x2: this.props.x,
            y2: this.props.length
        }

        return coords;
    }

    render() {
        let coords = this.prepareCords();
        return (
            <line {...coords} stroke="green" strokeWidth={2} />
        )
    }
}