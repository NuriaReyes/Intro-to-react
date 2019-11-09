import React, { Component } from 'react';
import { client } from '../../services/event';

class Fetch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstCall: null,
            endCall: null,
        };
    }

    componentWillMount() {
        this.setState({ firstCall: new Date() });
    }

    async componentDidMount() {
        const data = await client.get(this.props.url);
        this.setState({ data, endCall: new Date() });
    }

    render() {
        return (
            this.state.data ? this.props.render && this.props.render(this.state) : <p>Loadding...</p>
        );
    }
}

export default Fetch;
