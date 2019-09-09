import profileReducer from "./profile-reduser";
// import dialogsReducer from "./dialogs-reduser";
// import sidebarReducer from "./sidebar-reduser";
//
// let store = {
//     _state: {
//         profilePage: {
//             posts: [
//                 {id: 1, message: 'Hi, how are you?', likeCount: '25'},
//                 {id: 2, message: 'It is my post!', likeCount: '21'},
//                 {id: 3, message: 'This is my post to!', likeCount: '5'}
//             ],
//             newPostText: 'your post!'
//         },
//         dialogsPage: {
//             dialogs: [
//                 {id: 1, name: 'Dima'},
//                 {id: 2, name: 'Olga'},
//                 {id: 3, name: 'Lilia'},
//                 {id: 4, name: 'Vitya'},
//                 {id: 5, name: 'Misha'},
//                 {id: 6, name: 'Stas'},
//                 {id: 7, name: 'Robot'},
//                 {id: 8, name: 'Nagibator'},
//                 {id: 9, name: 'Rasgibator'},
//                 {id: 10, name: 'Bender'}
//             ],
//             messagesMe: [
//                 {id: 2, message: 'I am a normal pBLablabl I can have text and everythin.'}
//
//             ],
//             messages: [
//                 {id: 1, message: 'I am a normal popover and I can have text and everything.'}
//             ],
//             newChatText: 'your massage!'
//         },
//         sidebar: {}
//     },
//     _callSubscriber() {
//         console.log("State is changed");
//     },
//     getState() {
//         return this._state;
//     },
//
//     subscribe(observer) {
//         this._callSubscriber = observer; // наблюдатель
//     },
//     dispatch(action) {
//
//         this._state.profilePage = profileReducer(this._state.profilePage, action);
//         this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
//         this._state.sidebar = sidebarReducer(this._state.sidebar, action);
//
//         this._callSubscriber(this._state);
//     }
// }
//
//
//
// // window.store = store;