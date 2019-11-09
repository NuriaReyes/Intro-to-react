import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class Loading extends Component {
    render() {
        return (
            this.props.render ? this.props.render(this.props) : <p>Loading...</p>
        );
    }
}

export default Loading;
