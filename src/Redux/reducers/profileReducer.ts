const reducerName = `@profile`;

export const profileReducer = (state = {name: '', email: ''}, action: any) => {
    switch (action.type) {
        case `${reducerName}/set`:
            return {
                ...state,
                name: action.payload.name,
                email: action.payload.email
            };
        case `${reducerName}/get`:
            return state
        default:
            return state;
    }
}