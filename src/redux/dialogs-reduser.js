const UPDATE_NEW_CHAT = 'UPDATE-NEW-CHAT';
const SEND_TEXT_CHAT = 'SEND-TEXT-CHAT';

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
    ],
    messagesMe: [
        {id: 2, message: 'I am a normal pBLablabl I can have text and everythin.'}

    ],
    messages: [
        {id: 1, message: 'A normal popover and I can have text and everything.'}
    ],
    defaultText: ""
};

const dialogsReducer = (state = initialState, action) => {

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

export const sendTextChat = (newMessageBody) => ({type: SEND_TEXT_CHAT, newMessageBody});
export const updateNewChatText = (defaultText) =>
    ({type: UPDATE_NEW_CHAT, defaultText });

export default dialogsReducer;