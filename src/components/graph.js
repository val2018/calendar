/**
 * Created by valerie on 1/6/18.
 */
import React from 'react';
import Axis from './axis';
import GraphBody from './graph_body';

export default class Graph extends React.Component {
    static defaultProps = { width: 620, height: 720, padding: 20 };

    render() {

        return (
            <svg width={this.props.width} height={this.props.height} style={{padding: 10}}>
                <Axis
                    x={20}
                    y={0}
                    length={this.props.height}
                    horizontal={false}
                />
                <GraphBody
                    x={20}
                    y={this.props.height}
                    data={this.props.data}
                />
            </svg>
        )
    }
}