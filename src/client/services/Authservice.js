/**
 * Authentication Service.
 * Handles operations related to the authentication of the user.
 *
 * @author Daria <lo.pennequin@gmail.com>
 */

import store        from '../store/store';
import http         from './RestService';
import UserModel    from '../models/UserModel.js';

export default class AuthService {

    /**
     * Authenticated the user, then updates the store with the User information.
     * @param {FormData} formdata
     */
    static async login(formdata) {
        try {
            const body      = formdata;
            const response  = await http.post(false, '/api/login', { body });
            const data      = await response.json();

            if (response.ok) {
                localStorage.setItem('token', data.token);
                localStorage.setItem('uid', data.uid);
                const user  = await UserModel.fetchById(data.uid);
                await store.actions.setUser(user);
                await store.actions.login();
            } else {
                // TODO:
                return data;
            }
        } catch (err) {
            // TODO:
        }
    }

    /**
     * Asks the server if the user is authenticated.
     */
    static async isLoggedIn() {
        return await http.get('/api/loggedin');
    }

    /**
    * Logs out the user.
    */
    static async logout() {
        localStorage.removeItem('token');
        localStorage.removeItem('uid');
        await store.actions.logout();
    }

    /**
    * Retrieves token from local storage.
    */
    static getToken() {
        return localStorage.getItem('token')
    }

    /**
    * Retrieves user id from local storage.
    */
    static getUid() {
        return localStorage.getItem('uid')
    }
}
