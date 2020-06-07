import { InferActionsTypes } from "./redux-store";

type DialogType = {
    id: number
    name: string
}

type MessagesType = {
    id: number
    likeCount: number
    message: string
}

export type InitialStateType = typeof initialState;
type ActionsType = InferActionsTypes<typeof actions>;

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
        {id: 2, likeCount: 0, message: 'I am a normal. I can have text and everything.'}

    ] as Array<MessagesType>,
    messages: [
        {id: 1, likeCount: 0, message: 'A normal popover and I can have text and everything.'}
    ] as Array<MessagesType>,
    defaultText: "" as string
};



const dialogsReducer = (state = initialState, action: ActionsType): InitialStateType => {

    switch (action.type) {
        case 'SN/DIALOGS/SEND-TEXT-CHAT':
            return {
                ...state,
                messagesMe: [...state.messagesMe, {id: 15, likeCount: 0, message: action.newMessageBody}]
            };
        case 'SN/DIALOGS/UPDATE-NEW-CHAT':
            return {
                ...state,
                defaultText: action.defaultText
            };

        default:
            return state;
    }
}

export const actions = {
    sendTextChat: (newMessageBody: string) => ({type: 'SN/DIALOGS/SEND-TEXT-CHAT', newMessageBody} as const),
    updateNewChatText: (defaultText: string) => ({type: 'SN/DIALOGS/UPDATE-NEW-CHAT', defaultText } as const),
}


export default dialogsReducer;
