import React, { Component } from 'react';
import Client from '../../services/event';

class Fetch extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            this.props.render()
        );
    }
}

export default Fetch;
