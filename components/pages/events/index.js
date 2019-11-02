import React, { Component } from 'react';
import { getEvents } from '../../services/event';

class Events extends Component {

    constructor(props) {
        super(props);

        this.state = {
            events: [],
        };
    }

    componentDidMount() {
        getEvents().then((response) => {
            this.setState({
                events: response.data.data,
            });
        });
    }

    render() {
        return (
            <div>
                Events
            </div>
        );
    }
}

export default Events;
