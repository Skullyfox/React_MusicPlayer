import * as React from 'react';
import * as _ from 'lodash';
import { Link } from 'react-router-dom';
export default function () {
    return React.createElement('div', { 'className': 'not-found flex centered rows' }, React.createElement('h1', { 'className': 'not-found_title' }, '404 !'), React.createElement(Link, {
        'to': '/',
        'className': 'not-found_link'
    }, 'Take me back home !'));
}