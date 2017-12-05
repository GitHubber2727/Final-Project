import { findMatchingUser } from '../users';

//export function login(username, creditcard) {
//    return function(dispatch) {
//        const user = findMatchingUser(username, creditcard);
//        // If it username/password are correct, a user object will be available
//        if (user) {
//            // TODO #6 trigger a LOGIN_SUCCESS action here
//dispatch(loginSuccess(user))
//        }
//    };
//}
//export function loginSuccess(user) {
//    return {
//        type: "LOGIN_SUCCESS",
//        loggedInUser: user
//    }
//}

export function unlock(video) {
    return{
        type: "UNLOCK_SUCCESS",
        video: video
    }
}