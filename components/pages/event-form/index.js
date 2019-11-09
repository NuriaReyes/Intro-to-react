import React, { Component } from 'react';
import { getEvent, postAtendee } from '../../services/event';
import { withRouter } from 'react-router-dom';

class EventForm extends Component {
    constructor(props) {
        super(props);
        console.log(props, props.match.params.id);

        this.state = {
            event: {},
            name: '',
            mail: '',
            size: '',
            company: '',
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

    onMailChange(evt) {
        this.setState({
            mail: evt.target.value,
        });
    }

    onSizeChange(evt) {
        this.setState({
            size: evt.target.value,
        });
    }

    onCompanyChange(evt) {
        this.setState({
            company: evt.target.value,
        });
    }

    render() {
        const { event, name, mail, size, company } = this.state;
        return (
            <div>
                <h2>{event.name}</h2>
                <p>{event.description}</p>
                <h2>Tickets</h2>
                <form action={postAtendee(this.state)} method="POST">
                    <label htmlFor="name">Nombre: </label>
                    <input value={name} onChange={(evt) => this.onNameChange(evt)} id="name" />
                    <label htmlFor="mail">Correo Electrónico: </label>
                    <input value={mail} onChange={(evt) => this.onMailChange(evt)} id="mail" />
                    <label htmlFor="size">Talla de Playera: </label>
                    <input value={size} onChange={(evt) => this.onSizeChange(evt)} id="size" />
                    <label htmlFor="company">Empresa: </label>
                    <input value={company} onChange={(evt) => this.onCompanyChange(evt)} id="company" />

                    <input type="submit" value="Continuar" />
                </form>
            </div >
        );
    }
}

export default EventForm;
