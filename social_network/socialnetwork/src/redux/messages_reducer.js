const ADD_FRIEND = 'ADD-FRIEND';
const UPDATE_NEW_FRIEND_NAME = 'UPDATE-NEW-FRIEND-NAME';

const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
    contactsData: [
        { name: 'Sasha', road: 'Sasha' },
        { name: 'Yarik', road: 'Yarik' },
        { name: 'Dima', road: 'Dima' },
        { name: 'Ura', road: 'Ura' },
        { name: 'Alex', road: 'Alex' },
        { name: 'Vlad', road: 'Vlad' },
        { name: 'Brian', road: 'Brian' },
        { name: 'John', road: 'John' },
        { name: 'Keith', road: 'Keith' },
        { name: 'Antonio', road: 'Antonio' },
        { name: 'David', road: 'David' },
    ],
    chatData: [
        {
            name: 'Sasha', text: `Hey how are you? I am miss you so much!!!`
        },
        {
            name: 'Me', text: `Hey, i was in the Dubai! I meat Andrew Tate and he shaked my hand!!!!!!! Thats crazy.'`
        },
        {
            name: 'Sasha', text: `Yo that is cool staff. Do you have some planes for this evening?`
        },
        {
            name: 'Me', text: `Nope, i am not busy today`
        },
        {
            name: 'Sasha', text: `Cool so lets meet near old store on St.Maudiy 35 street`
        },
        {
            name: 'Me', text: `Ok sure, i will be there near 3 hours`
        },

    ],
    newMessageText: '',
    newFriendName: ''
};
const messagesReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                name: 'Sasha', text: state.newMessageText
            }
            state.chatData.push(newMessage);
            state.newMessageText = '';
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newText;
        case ADD_FRIEND:
            let newFriend = {
                name: action.friendName, road: `/${action.friendName}`
            }
            state.contactsData.push(newFriend);
            state.newFriendName = '';
        case UPDATE_NEW_FRIEND_NAME:
            state.newFriendName = action.newName;
        default:
            return state;
    }
}

export const addNewFriendActionCreator = (name) => {
    return {
        type: ADD_FRIEND,
        friendName: name,
    }
}

export const onNameChangeActionCreator = (name) => {
    return {
        type: UPDATE_NEW_FRIEND_NAME,
        newName: name
    }
}


export const addMessageActionCreator = () => {
    return {
        type: ADD_MESSAGE,
    }
}

export const onMessageChangeActionCreator = (text) => {
    return {
        type: UPDATE_NEW_MESSAGE_TEXT,
        newText: text
    }
}


export default messagesReducer;