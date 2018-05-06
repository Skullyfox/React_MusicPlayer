/**
 * REST Service.
 * This service is used when making an http request to the server.
 * It automatically provides Bearer token from local storage if available, and logs out the user in case of 401 error code.
 *
 * @author Daria <lo.pennequin@gmail.com>
 */

import BaseUrl      from './UrlService';
import AuthService  from './AuthService';
import history      from './historyService';

export default class RestService {
    /**
     * Prepares GET request.
     * @param {String} url
     * @param {Object} options
     */
    static get(url, options) {
        options = Object.assign({}, options, { method: 'GET' });
        return this.fetch(url, options);
    }

    /**
     * Prepares POST request.
     * @param {String} url
     * @param {Object} options
     * @param {Boolea} isJson : indicates if the body is of json format;
     */
    static post(isJson, url, options) {
        if (isJson === true) {
            options.body = JSON.stringify(options.body);
            options.headers = new Headers({'Content-Type': 'application/json'});
        }
        options = Object.assign({}, options, {method: 'POST'});
        return this.fetch(url, options);
    }

    /**
     * Prepares PUT request.
     * @param {String} url
     * @param {Object} options
     * @param {Boolea} isJson : indicates if the body is of json format;
     */
    static put(isJson, url, options) {
        if (isJson === true) {
            options.body = JSON.stringify(options.body);
            options.headers = new Headers({'Content-Type': 'application/json'});
        }
        options = Object.assign({}, options, {method: 'POST'});
        return this.fetch(url, options);
    }

    /**
     * Prepares DELETE request.
     * @param {String} url
     * @param {Object} options
     */
    static delete(url, options) {
        options = Object.assign({}, options, { method: 'DELETE' })
        return this.fetch(url, options);
    }

    /**
     * Handle the http request.
     * @param {String} url
     * @param {Object} options
     */
    static async fetch(url, options) {
        if (!url.startsWith('http')) {
            url = BaseUrl.get() + url;
        }
        options = this.attachToken(options);
        try {
            let response = await fetch(url, options);
            this.handleUnauthorized(response);
            return response;
        } catch (error) {
            return error
        }
    }

    /**
     * Provides Bearer Token from local storage.
     * @param {Object} options
     */
    static attachToken(options) {
        const token = AuthService.getToken();
        if (token) {
            if (options && options.headers) {
                options.headers.append('Authorization', 'Bearer ' + token)
            } else {
                options.headers = new Headers({
                    'Authorization': 'Bearer ' + token
                })
            }
        }
        return options;
    }

    /**
     * handles 401 Response code.
     * @param {Object} response
     */
    static handleUnauthorized(response) {
        if (response.status === 401 || response.status === 403) {
            AuthService.logout();
            history.push('/');
        }
    }
}
