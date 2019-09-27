import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom'

export class Error_Page extends Component {
    render() {
        return (
            <Fragment>
                <h2>Sorry you have reached an error page in 404 error, please go to home page</h2>
                <Link to="/" style={{color:'green'}}> Home </Link>
            </Fragment>
        );
    }
}

export default Error_Page;
