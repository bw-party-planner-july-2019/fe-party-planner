import {LOGIN_SUCCESS, LOGOUT} from '../auth/types';

export const authMiddleware = state => next => action => {
    if (action.type === LOGIN_SUCCESS) {
        localStorage.setItem('token', JSON.stringify(action.payload.token));
    }

    if (action.type === LOGOUT) {
        localStorage.removeItem('token');
    }

    next(action);
}