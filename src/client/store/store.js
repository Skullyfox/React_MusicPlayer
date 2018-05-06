/**
 * The store used by React-contextual.
 * setups initialState and actions.
 *
 * @author Daria <lo.pennequin@gmail.com>
 */

import { createStore    }   from 'react-contextual'
import authActions          from './actions/authActions';
import userActions          from './actions/userActions';

let store = createStore({
    initialState: {authenticated : undefined},
    actions: Object.assign({}, authActions, userActions)
});

export default store;
