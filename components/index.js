import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../styles/app.scss';
import Events from './pages/events';
import EventForm from './pages/event-form';
import Week4 from './pages/week4';

import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';

export const ReactSchoolContext = React.createContext();

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { isLoggedIn: false };
    }

    render() {
        return (
            <ReactSchoolContext.Provider value={this.state.isLoggedIn}>
                <style>
                    {
                        `
                        nav {
                            background-color: pink;
                            padding: 20px 10px;
                        }
                        nav a {
                            padding: 5px 20px;
                        }
                        nav a.active {
                            background-color: black;
                            color: white;
                        }
                        `
                    }
                </style>
                <nav>
                    <NavLink exact to="/">Home</NavLink>
                    <NavLink exact to="/week4">Week 4</NavLink>
                </nav>
                <Switch>
                    <Route path="/events/:id" component={EventForm} />
                    <Route path="/week4">
                        <Week4 />
                    </Route>
                    <Route exact path="/" render={() => <Events test="test" />} />
                </Switch>
            </ReactSchoolContext.Provider>
        );
    }
}

// <Route exact <-- routes you to this only if the match is exact

const component = <Router><App /></Router>;

const container = document.getElementById('app');

ReactDOM.render(component, container);
