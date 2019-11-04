import React, { Component } from 'react';
import { getEvents } from '../../services/event';
import Event from '../event';

class Events extends Component {

    constructor(props) {
        super(props);

        this.state = {
            events: [],
        };
    }

    componentDidMount() {
        getEvents().then((response) => {
            return response.data.data;
        }).then((events) => {
            this.setState({
                events,
            });
        });
    }

    render() {
        const { events } = this.state;
        return (
            <div>
                <h1>Events</h1>
                {
                    events.map((event, index) => {
                        return <Event key={index} event={event} />;
                    })
                }
            </div>
        );
    }
}

export default Events;
