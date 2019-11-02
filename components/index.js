import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../styles/app.scss';
import Events from './pages/events';

class App extends Component {
    render() {
        return (
            <div className="app-wrapper">
                <Events />
            </div>
        );
    }
}

const component = <App />;
const container = document.getElementById('app');

ReactDOM.render(component, container);
