const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likeCount: '25'},
        {id: 2, message: 'It is my post!', likeCount: '21'},
        {id: 3, message: 'This is my post to!', likeCount: '5'}
    ],
    newPostText: 'your post!'
};

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                newPostText: '',
                message: state.newPostText,
                likeCount: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost]

            };
        }
        case UPDATE_NEW_POST_TEXT: {
            return{
                ...state,
                newPostText: action.newText
            };
    }
        default:
            return state;

    }
}

export const addPost = () => ({type: ADD_POST});
export const updateNewPostText = (text) =>
    ({type: UPDATE_NEW_POST_TEXT, newText: text });

export default profileReducer;