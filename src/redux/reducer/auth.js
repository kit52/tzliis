export const SET_LOGIN = "SET_LOGIN";
export const SET_LOGOUT = "SET_LOGOUT";
const initialState = {
    auth: false
}
export default function authReducer(state = initialState, action) {
    debugger
    switch (action.type) {

        case SET_LOGOUT:
            return { ...state, auth: false }
        case SET_LOGIN:
            return { ...state, auth: true }
        default:
            return state;
    }

}