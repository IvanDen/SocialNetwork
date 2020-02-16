const UPDATE_NEW_CHAT = 'UPDATE-NEW-CHAT';
const SEND_TEXT_CHAT = 'SEND-TEXT-CHAT';

type DialogType = {
    id: number
    name: string
}

type MessagesType = {
    id: number
    likeCount: number
    message: string
}

let initialState = {
    dialogs: [
        {id: 1, name: 'Dima'},
        {id: 2, name: 'Olga'},
        {id: 3, name: 'Lilia'},
        {id: 4, name: 'Vitya'},
        {id: 5, name: 'Misha'},
        {id: 6, name: 'Stas'},
        {id: 7, name: 'Robot'},
        {id: 8, name: 'Georgi'},
        {id: 9, name: 'Valera'},
        {id: 10, name: 'Bender'}
    ] as Array<DialogType>,
    messagesMe: [
        {id: 2, likeCount: 0, message: 'I am a normal pBLablabl I can have text and everythin.'}

    ] as Array<MessagesType>,
    messages: [
        {id: 1, likeCount: 0, message: 'A normal popover and I can have text and everything.'}
    ] as Array<MessagesType>,
    defaultText: "" as string
};

export type InitialStateType = typeof initialState;

const dialogsReducer = (state = initialState, action: any): InitialStateType => {

    switch (action.type) {
        case SEND_TEXT_CHAT:
            return {
                ...state,
                messagesMe: [...state.messagesMe, {id: 15, likeCount: 0, message: action.newMessageBody}]
            };
        case UPDATE_NEW_CHAT:
            return {
                ...state,
                defaultText: action.defaultText
            };

        default:
            return state;
    }
}
type SendTextChatActionType = {
    type: typeof SEND_TEXT_CHAT
    newMessageBody: string
}
export const sendTextChat = (newMessageBody: string): SendTextChatActionType => ({type: SEND_TEXT_CHAT, newMessageBody});

type UpdateNewChatTextActionType = {
    type: typeof UPDATE_NEW_CHAT
    defaultText: string
}
export const updateNewChatText = (defaultText: string): UpdateNewChatTextActionType =>
    ({type: UPDATE_NEW_CHAT, defaultText });

export default dialogsReducer;
