/**
 * Main App component.
 * Checks authentication status and setup initial state.
 *
 * @author Daria <lo.pennequin@gmail.com>
 */

import React                             from 'react';
import { Route, Switch }                          from 'react-router-dom';
import { subscribe }                     from 'react-contextual'
import store                             from './store/store';

import AuthService                       from './services/Authservice.js';
import UserModel                         from './models/UserModel.js';
import { PrivateRoute, LoggedOutRoute }  from './components/Routes/Routes.jsx';
import Home                              from './pages/Home/Home.jsx';
import Profile                           from './pages/Profile/Profile.jsx';
import NotFound                          from './pages/404/404.jsx';


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { loading: true }
    }

    async componentDidMount() {
        await this.verifyAuth();
    }

    /**
     * Checks if a user is authenticated and put use information into state if he is.
     *
     */
    async verifyAuth(){
        if ( typeof this.props.authenticated === 'undefined' ) {
            await this.props.actions.isAuthed();
            if ( this.props.authenticated === true ){
                const user = await UserModel.fetchById(AuthService.getUid());
                this.props.actions.setUser(user);
            }
        }
        this.setState({ loading: false });
    }

    render() {
        return (
            this.state.loading ?
            null :
            <Switch>
                <LoggedOutRoute exact path="/" component={Home}/>
                <PrivateRoute exact path="/profile" component={Profile}/>
                <Route component={NotFound}/>
            </Switch>
        )
    }
}

export default subscribe(store)(App);
