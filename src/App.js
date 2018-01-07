import './App.css';
import React from 'react';
import Graph from './components/graph';

export default class App extends React.Component {
    render() {
        return (
            <Graph data={this.props.data} />
        )
    }
}
