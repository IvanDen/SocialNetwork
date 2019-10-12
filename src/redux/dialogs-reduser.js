// const UPDATE_NEW_CHAT = 'UPDATE-NEW-CHAT';
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
        {id: 8, name: 'Nagibator'},
        {id: 9, name: 'Rasgibator'},
        {id: 10, name: 'Bender'}
    ],
    messagesMe: [
        {id: 2, message: 'I am a normal pBLablabl I can have text and everythin.'}

    ],
    messages: [
        {id: 1, message: 'A normal popover and I can have text and everything.'}
    ]
};

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case SEND_TEXT_CHAT:
            let newMess = action.newMessageBody;
            return {
                ...state,
                messagesMe: [...state.messagesMe, {id: 15, likeCount: 0, message: newMess}]
            };

        default:
            return state;
    }
}

export const sendTextChat = (newMessageBody) => ({type: SEND_TEXT_CHAT, newMessageBody});
/*export const updateNewChatText = (text) =>
    ({type: UPDATE_NEW_CHAT, newText: text });*/

export default dialogsReducer;