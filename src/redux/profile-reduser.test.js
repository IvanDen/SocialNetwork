import profileReducer, {addPost, deletePost} from "./profile-reduser";
import React from 'react';

let state = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likeCount: '25'},
        {id: 2, message: 'It is my post!', likeCount: '21'},
        {id: 3, message: 'This is my post to!', likeCount: '5'}
    ]
};

it('Length of post should be incremented', () => {
    // 1. test data
    let action = addPost("This is test post");
    // 2. action
    let newState = profileReducer(state, action);
    // 3. expectation
    expect(newState.posts.length).toBe(4);

});

it('Message of new post should be correct', () => {
    // 1. test data
    let action = addPost("This is test post");
    // 2. action
    let newState = profileReducer(state, action);
    // 3. expectation

    expect(newState.posts[3].message).toBe("This is test post");
});

it('After removal, the length of the array should decrease.', () => {
    // 1. test data
    let action = deletePost(1);
    // 2. action
    let newState = profileReducer(state, action);
    // 3. expectation
    expect(newState.posts.length).toBe(2);
});

it('After removal, the length should\'t descrement if id is incorrect.', () => {
    // 1. test data
    let action = deletePost(1000);
    // 2. action
    let newState = profileReducer(state, action);
    // 3. expectation
    expect(newState.posts.length).toBe(3);
});
