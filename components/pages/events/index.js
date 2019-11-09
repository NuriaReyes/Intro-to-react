import React, { Component } from 'react';
import { getEvents } from '../../services/event';
import Event from '../event';
import Fetch from '../week4/fetch';

import { withRouter } from 'react-router-dom';

class Events extends Component {

    constructor(props) {
        super(props);

        this.state = {
            events: [],
        };
    }

    // async componentDidMount() {
    //     console.log(this.props);

    //     const { data: { data } } = await getEvents();
    //     this.setState({
    //         events: data,
    //     });
    // }

    render() {
        const { events } = this.state;
        return (
            <div>
                <h1>Events</h1>
                <Fetch url="event" render={data2 => {
                    const { data: { data: { data } } } = data2;
                    console.log(data);

                    return (
                        data.map((event, index) => {
                            return <Event key={index} event={event} />;
                        })
                    );
                }} />
                {/* <p>{this.props.test}</p>
                {
                    events.map((event, index) => {
                        return <Event key={index} event={event} />;
                    })
                } */}
            </div>
        );
    }
}

export default withRouter(Events);
