const reducerName = `@navbar`;

export const navbarReducer = (state: number = 0, action: any) => {
    switch (action.type) {
        case `${reducerName}/openPage`:
            return action.index;
        default:
            return state;
    }
}