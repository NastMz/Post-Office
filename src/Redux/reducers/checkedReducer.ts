const reducerName = `@checked`;

export const checkedReducer = (state: boolean = false, action: any) => {
    switch (action.type) {
        case `${reducerName}/check`:
            return true;
        case `${reducerName}/uncheck`:
            return false;
        default:
            return state;
    }
}