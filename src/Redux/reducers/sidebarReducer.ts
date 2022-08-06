const reducerName = `@bar`;

export const sidebarReducer = (state: boolean = false, action: any) => {
    switch (action.type) {
        case `${reducerName}/open`:
            return true;
        case `${reducerName}/close`:
            return false;
        default:
            return state;
    }
}