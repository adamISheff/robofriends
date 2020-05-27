import React, { Component } from 'react';

class ErrorBoundry extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasErro: false
        }
    }

    componentDidCatch(error, info) {
        this.setState({hasErro: true})
    }

    render() {
        if (this.state.hasError) {
            return <h1>Oooops. That's an error.</h1>
        }
        return this.props.children
    }
}

export default ErrorBoundry;