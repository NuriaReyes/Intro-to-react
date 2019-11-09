import React, { Component } from 'react';
import withErrorHandler from './withErrorHandler';

class Loading extends Component {
    render() {
        return (
            this.props.render ? this.props.render(this.props) : <p>Loading...</p>
        );
    }
}

export default withErrorHandler(Loading);
