/**
 * Model for the user.
 * Provide CRUD methods to interact with the user.
 *
 * @author Daria <lo.pennequin@gmail.com>
 */

import http         from '../services/RestService';
import AuthService  from '../services/AuthService.js';

export default class UserModel {
    /**
     * Creates a new user.
     * @param {FormData} formdata
     *
     */
    static async create(formdata) {
        try {
            const body = formdata;
            const response = await http.post(false, '/api/register', { body });
            return await response.json();
        } catch (err) {
            return err;
        }
    }

    /**
     * Fetches user data by id.
     * @param {Number} id
     *
     */
    static async fetchById(id){
        try {
            const response = await http.get(`/api/user/${id}`);
            return await response.json();
        } catch (err) {
            return err;
        }
    }
}
