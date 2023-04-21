import {ADD_CHAT, DELETE_CHAT} from '../../actionTypes';
const initialState = {
    chatList: [
        {id: 1,
            name: 'Andrew'},
        {id: 2,
            name: 'Evgeniy'}
    ]
};
export const chatsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CHAT:
            return {
                ...state,
                chatList: [
                    ...state.chatList, action.payload]
            };
        case DELETE_CHAT:
            return {
                ...state,
                chatList: state.chatList.filter((chatItem) => chatItem.id !== action.payload)
            };
        default:
            return state;
    }
};

