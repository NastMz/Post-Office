const reducerName = `@input`;

export const inputBarReducer = (state: string = "", action: any) => {
    switch (action.type) {
        case `${reducerName}/search`:
            return action.payload;
        case `${reducerName}/resetSearch`:
            return '';
        default:
            return state;
    }
}