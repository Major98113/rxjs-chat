import * as types from '../constants/chat.types';

const initialState = {
    messages: [],
    isLoading: false,
    error: null
}

export default ( state = initialState, action: any ) => {
    switch (action.type) {
        case types.MESSAGES_LIST_REQUEST:
            return {
                ...state,
                isLoading: true
            }
        case types.MESSAGES_LIST_SUCCESS:
            return {
                ...state,
                messages: action.messages,
                isLoading: false
            }
        case types.MESSAGES_LIST_FAILED:
            return {
                ...state,
                error: action.error,
                isLoading: false
            }
        default:
            return state;
    }
}