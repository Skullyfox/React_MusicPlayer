/**
 * Handles 404.
 *
 * @author Daria <lo.pennequin@gmail.com>
 */

import React            from 'react';
import template         from './template.html.js';

class NotFound extends React.Component {
    constructor(props){
        super(props);
    }
    
    render() {
        return template.apply(this);
    }
}

export default NotFound;
