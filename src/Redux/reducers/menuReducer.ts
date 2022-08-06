const reducerName = `@menu`;

export const menuReducer = (state: boolean  = false, action: any) => {
    switch (action.type) {
        case `${reducerName}/open`:
            return true;
        case `${reducerName}/close`:
            return false;
        default:
            return state;
    }
}