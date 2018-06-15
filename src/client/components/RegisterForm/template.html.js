import * as React from 'react';
import * as _ from 'lodash';
export default function () {
    function repeatField1(field, fieldIndex) {
        return React.createElement('div', {
            'className': 'form-field',
            'key': fieldIndex
        }, React.createElement('label', {
            'className': 'label',
            'htmlFor': field.label
        }, '\n                ', field.label, '\n            '), React.createElement('input', {
            'className': 'input',
            'type': field.type,
            'name': field.label
        }), field.errors ? React.createElement('div', {
            'className': 'txt-danger',
            'key': '394'
        }, field.errors.msg) : null);
    }
    return React.createElement('div', {}, React.createElement.apply(this, [
        'form',
        {
            'className': 'register-form is-secondary',
            'onSubmit': e => this.onSubmit(e),
            'noValidate': true
        },
        _.map(this.state.fields, repeatField1.bind(this)),
        React.createElement('div', { 'className': 'form-field' }, React.createElement('input', {
            'className': 'button is-primary is-rounded',
            'type': 'submit',
            'value': 'LOGIN'
        }))
    ]), this.state.success ? React.createElement('p', {
        'className': 'txt-success',
        'key': '630'
    }, 'Registration successful.') : null);
}