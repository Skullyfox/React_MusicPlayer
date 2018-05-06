/**
 * Main component for the home page..
 *
 * @author Daria <lo.pennequin@gmail.com>
 */

import React from 'react';
import template from './template.html.js';

import { subscribe } from 'react-contextual';
import store from '../../store/store.js';

class Profile extends React.Component {
    constructor( props ) {
        super( props );
    }

    render() {
        return template.apply( this );
    }
}

export default subscribe(store)(Profile);
