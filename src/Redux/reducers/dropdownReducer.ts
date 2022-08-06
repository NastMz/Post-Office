const reducerName = `@dropdown`;

export const dropdownReducer = (state: boolean = false, action: any) => {
    switch (action.type) {
        case `${reducerName}/open`:
            return true;
        case `${reducerName}/close`:
            return false;
        default:
            return state;
    }
}