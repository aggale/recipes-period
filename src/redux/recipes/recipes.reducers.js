const INITIAL_STATE = {"test": {title: "test", description: "test"}};

const recipesReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        default:
            return state;
    }
}

export default recipesReducer;