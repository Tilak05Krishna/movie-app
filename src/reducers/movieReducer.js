const movieReducer = (state = [], action) => {
    switch (action.type) {
        case "ADD_MOVIE":
            return [...state, action.payload];
        case "REMOVE_MOVIE":
            const pos = state.indexOf(action.payload);
            const newState = state.splice(pos);
            return newState;
        default:
            return state;
    }
};

export default movieReducer;