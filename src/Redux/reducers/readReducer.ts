const reducerName = `@read`;

export const readReducer = (state = false, action: any) => {
    switch (action.type) {
        case `${reducerName}/setReading`:
            return true
        case `${reducerName}/unsetReading`:
            return false
        default:
            return state;
    }
}