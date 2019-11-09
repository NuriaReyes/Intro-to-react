import React, { Component } from 'react';
import { getEvents } from '../../services/event';
import Event from '../event';

import { withRouter } from 'react-router-dom';

class Events extends Component {

    constructor(props) {
        super(props);

        this.state = {
            events: [],
        };
    }

    async componentDidMount() {
        console.log(this.props);

        const { data: { data } } = await getEvents();
        this.setState({
            events: data,
        });
    }

    render() {
        const { events } = this.state;
        return (
            <div>
                <h1>Events</h1>
                <p>{this.props.test}</p>
                {
                    events.map((event, index) => {
                        return <Event key={index} event={event} />;
                    })
                }
            </div>
        );
    }
}

export default withRouter(Events);
