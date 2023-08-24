
const initialState = {
    user: null,
    token: null,
    friends: [],
    tasks: [],
};

const taskReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.payload,
            };
        
        default:
            return state;

    }
};

export default taskReducer;