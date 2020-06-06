import {authUser} from "./auth-reduser";
import {InferActionsTypes} from "./redux-store";

let initialState = {
    initialized: false
}

export type InitialStateType = typeof initialState;
export type ActionsType =  InferActionsTypes<typeof actions>;

const appReducer = (state = initialState, action: ActionsType): InitialStateType => {

    switch (action.type) {
        case 'SN/APP/INITIALIZED_SUCCESS': {
            return {
                ...state,
                initialized: true
            };
        }
        default:
            return state;
    }
}

export const actions = {
    initializedSuccess: () => ({type: 'SN/APP/INITIALIZED_SUCCESS'} as const)
}



export const initializeApp = () => (dispatch: any) => {
    let promise = dispatch(authUser());
//If the promise is returned from several dispatch, then we wrap promises in an array.
    Promise.all([promise]).then(() => {
        dispatch(actions.initializedSuccess());
    });
}

export default appReducer;
