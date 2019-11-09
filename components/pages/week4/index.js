import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Loading from './loading';

class Week4 extends Component {
    constructor() {
        super();
        this.handleGoHome = this.handleGoHome.bind(this);
    }

    componentDidMount() {
        console.log(this.props);
    }

    handleGoHome() {
        this.props.history.push('/');
    }

    render() {
        return (
            <>
                <h1>This is week 4</h1>
                <Loading render={() => {
                    return (
                        <div style={{ backgroundColor: 'beige', padding: '50px 100px' }}>
                            Cargando...
                        </div>
                    );
                }} />
                <button onClick={this.handleGoHome} >Go Home!</button>
            </>
        );
    }
}

export default withRouter(Week4);
