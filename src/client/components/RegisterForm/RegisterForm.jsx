/**
 * Register Form component.
 * Allows a user to register to the app.
 *
 * @author Daria <lo.pennequin@gmail.com>
 */

import React                 from 'react';
import template              from './template.html.js';

import UserModel             from '../../models/UserModel';

class RegisterForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fields: [
                {label: 'username', type: 'text', errors: []},
                {label: 'password', type: 'password', errors: []},
                {label: 'email', type: 'email', errors: []},
            ],
            success: false
        }
    }

    async onSubmit(e) {
        e.preventDefault();

        const data = new FormData(e.target);
        const response = await UserModel.create(data);

        if (response.errors) {
            this.setState({
                fields : this.state.fields.map(field => {
                    field.errors = this.filterErrors(field.label, response.errors);
                    return field;
                })
            });;
        } else {
            this.setState({ success: true, errors: [] });
        }
    }

    /**
     * Filter errors based on an input field and returns the first one.
     * @param {String} field
     * @param {Array} errors : an array of errors
     */
    filterErrors(field, errors) {
        return errors.filter(err => err.param === field)[0];
    }

    render() {
        return template.apply(this);
    }
}

export default RegisterForm;
