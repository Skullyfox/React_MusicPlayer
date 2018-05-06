/**
 * Application main container.
 * Setup initial provider and Router component.
 *
 * @author Daria <lo.pennequin@gmail.com>
 */

import React                        from "react";
import { Router, Route}    from 'react-router-dom';
import { Provider }                 from 'react-contextual';

import App                          from "../App.jsx";
import store                        from '../store/store';
import history                      from '../services/historyService';

export default class AppContainer extends React.Component {
    render(){
        return (
            <Provider store={store}>
                <Router history={history}>
                    <App />
                </Router>
            </Provider>
        );
    }
}
