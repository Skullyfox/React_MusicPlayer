/**
 * Store actions related to authentications.
 *
 * @author Daria <lo.pennequin@gmail.com>
 */

import AuthService from '../../services/Authservice.js';

export default {
    login: () => state => ({ authenticated: true }),
    logout: () => state => ({ authenticated: false }),
    isAuthed: async () => ({ authenticated: (await AuthService.isLoggedIn()).status === 200 })
}
