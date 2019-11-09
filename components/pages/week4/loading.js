import React, { Component } from 'react';
import withErrorHandler from './withErrorHandler';

import { ReactSchoolContext } from '../../index';

class Loading extends Component {
    render() {
        return (
            <ReactSchoolContext.Consumer>
                {
                    value => (
                        <div>
                            {this.props.render ? this.props.render(this.props) : <p>Loading...</p>}
                            Is the user logged? {value ? 'yes' : 'no'}
                        </div>
                    )
                }
            </ReactSchoolContext.Consumer>
            // this.props.render ? this.props.render(this.props) : <p>Loading...</p>
        );
    }
}

export default withErrorHandler(Loading);
