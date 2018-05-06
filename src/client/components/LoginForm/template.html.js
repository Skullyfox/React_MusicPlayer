import * as React from 'react';
import * as _ from 'lodash';
export default function () {
    return React.createElement('div', {}, React.createElement('form', {
        'className': 'login-form is-secondary',
        'onSubmit': e => this.handleSubmit(e),
        'noValidate': true
    }, React.createElement('div', { 'className': 'form-field' }, React.createElement('label', {
        'className': 'label',
        'htmlFor': 'username'
    }, 'username'), React.createElement('input', {
        'className': 'input',
        'type': 'text',
        'name': 'username'
    })), React.createElement('div', { 'className': 'form-field' }, React.createElement('label', {
        'className': 'label',
        'htmlFor': 'password'
    }, 'password'), React.createElement('input', {
        'className': 'input',
        'type': 'password',
        'name': 'password'
    })), React.createElement('div', { 'className': 'form-field' }, React.createElement('input', {
        'className': 'button is-primary is-rounded',
        'type': 'submit',
        'value': 'LOGIN'
    }))), this.state.hasError ? React.createElement('div', {
        'className': 'txt-danger',
        'key': '626'
    }, '\r\n        ', this.state.error, '\r\n    ') : null);
}