import {Dispatch} from 'redux';
import {FormAction} from "redux-form";
import {BaseThunkType, InferActionsTypes} from "./redux-store";
import {chatAPI, IChatMessage, StatusType} from "../api/chat-api";



let initialState = {
    messages: [] as IChatMessage[],
    status: 'pending' as StatusType
};
type InitialStateType = typeof initialState;
type ActionsType = InferActionsTypes<typeof actions>;
type ThunkType = BaseThunkType<ActionsType | FormAction>;

const chatReducer = (state = initialState, action: ActionsType): InitialStateType => {

    switch (action.type) {
        case 'SN/chat/MESSAGES_RECEIVED':
            return {
                ...state,
                messages: [...state.messages, ...action.payload.messages],
            }
        case 'SN/chat/STATUS_CHANGED':
            return {
                ...state,
                status: action.payload.status
            }
        default:
            return state;
    }
}

export const actions = {
    messagesReceived: (messages: IChatMessage[]) => ({
        type: 'SN/chat/MESSAGES_RECEIVED',  payload: {messages}
    } as const),
    statusChanged: (status: StatusType) => ({
        type: 'SN/chat/STATUS_CHANGED',  payload: {status}
    } as const)
}

let _newMessageHandler: ((messages: IChatMessage[]) => void) | null = null;
const newMessageHandlerCreator = (dispatch: Dispatch) => {
    if(_newMessageHandler === null) {
        _newMessageHandler = (messages) => dispatch(actions.messagesReceived(messages));
    }
    return _newMessageHandler;
}

let _statusChangedHandler: ((messages: StatusType) => void) | null = null;
const statusChangedHandlerCreator = (dispatch: Dispatch) => {
    if(_statusChangedHandler === null) {
        _statusChangedHandler = (status) => dispatch(actions.statusChanged(status));
    }
    return _statusChangedHandler;
}

export const startMessagesListening = (): ThunkType => async (dispatch) => {
    chatAPI.start();
    chatAPI.subscribe('messages-received', newMessageHandlerCreator(dispatch));
    chatAPI.subscribe('status-changed', statusChangedHandlerCreator(dispatch));
}

export const stopMessagesListening = (): ThunkType => async (dispatch) => {
    chatAPI.unsubscribe('messages-received', newMessageHandlerCreator(dispatch));
    chatAPI.unsubscribe('status-changed', statusChangedHandlerCreator(dispatch));
    chatAPI.stop();
}

export const sendMessage = (message: string): ThunkType => async (dispatch) => {
    chatAPI.sendMessage(message);
}

export default chatReducer;
