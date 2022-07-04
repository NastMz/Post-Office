const reducerName = `@searchBar`;

export const searchBarReducer = (state: string = "", action: any) => {
    switch (action.type) {
        case `${reducerName}/search`:
            return action.payload;
        default:
            return state;
    }
}