/**
 * Login Form component.
 * Allows a user to log in to the app.
 *
 * @author Daria <lo.pennequin@gmail.com>
 */

import React         from 'react';
import template      from './template.html.js';
import AuthService   from '../../services/AuthService.js';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: undefined,
            hasError: false
        }
    }

    async handleSubmit(e) {
        e.preventDefault();

        const data      = new FormData(e.target);
        const response  = await AuthService.login(data);
        if (response.message){
            this.setState({ hasError : true, error: response.message});
        }
    }

    render() {
        return template.apply(this);
    }
}

export default LoginForm;
