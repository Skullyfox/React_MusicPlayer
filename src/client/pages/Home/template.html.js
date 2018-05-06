import * as React from 'react';
import * as _ from 'lodash';
import RegisterForm from '../../components/RegisterForm/RegisterForm.jsx';
import LoginForm from '../../components/LoginForm/LoginForm.jsx';
export default function () {
    return React.createElement('div', {}, React.createElement('header', { 'className': 'header is-big txt-white is-primary' }, React.createElement('h1', { 'className': 'heading is-6' }, React.createElement('p', {}, 'Welcome to the React/NodeJs Skeleton !'), React.createElement('p', { 'className': 'sub-heading' }, 'This is the example app.'))), React.createElement('main', { 'className': 'grid is-2-columns is-gap-2 container' }, React.createElement('section', {}, React.createElement('h2', { 'className': 'heading is-3' }, 'Register'), React.createElement(RegisterForm, {})), React.createElement('section', {}, React.createElement('h2', { 'className': 'heading is-3' }, 'Login'), React.createElement(LoginForm, {}))));
}