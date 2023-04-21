import { ADD_MESSAGE, DELETE_MESSAGE } from "../../actionTypes";
const initialState = {
    messageList: [
        {chatId: 1,
        message: 'Hello',
        id: 1},
        {chatId: 2,
        message: 'Hay',
        id: 2}
    ],
}
export const messagesReducer = (state = initialState, action) => {
     switch (action.type) {
        case ADD_MESSAGE:
            return{
                ...state,
                messageList: [...state.messageList, action.payload]
            };
         case DELETE_MESSAGE:
             return{
                 ...state,
                 messageList: state.messageList.filter((msg) => msg.id !== action.payload)
             }
         case 'ADD_AUTHOR':
             return{
               ...state,
                messageList: [...state.messageList, {author: action.payload}]
             };
        default:
            return state;
    }
};

