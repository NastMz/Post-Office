const reducerName = `@load`;

export const loadReducer = (state = false, action: any) => {
    switch (action.type) {
        case `${reducerName}/setLoading`:
            return true
        case `${reducerName}/unsetLoading`:
            return false
        default:
            return state;
    }
}