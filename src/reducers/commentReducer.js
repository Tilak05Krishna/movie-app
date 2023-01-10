const commentReducer = (state = [{ userName: 'Tilak', userComment: 'Nice video' }, { userName: "Nighil", userComment: "Good Video" }], action) => {
    switch (action.type) {
        case "ADD_COMMENT":
            return [...state, action.payload];
        case "REMOVE_COMMENT":
            const pos = state.indexOf(action.payload);
            const newState = state.splice(pos);
            return newState;
        default:
            return state;
    }
};

export default commentReducer;