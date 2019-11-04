import React, { Component } from 'react';
import { getEvent } from '../../services/event';

class EventForm extends Component {
    constructor(props) {
        super(props);
        console.log(props, props.match.params.id);

        this.state = {
            event: {},
            name: '',
        };
    }

    componentDidMount() {
        getEvent(this.props.match.params.id)
            .then((response) => {
                this.setState({
                    event: { ...response.data.data }
                });
            });
    }

    onNameChange(evt) {
        this.setState({
            name: evt.target.value,
        });
    }

    render() {
        const { event, name } = this.state;
        return (
            <div>
                <h2>{event.name}</h2>
                <p>{event.description}</p>
                <input value={name} onChange={(evt) => this.onNameChange(evt)} />
            </div >
        );
    }
}

export default EventForm;
