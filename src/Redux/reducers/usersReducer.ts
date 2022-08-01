const reducerName = `@users`;

export const usersReducer = (state: Array<{name: string, email: string}> = [], action: any) => {
    switch (action.type) {
        case `${reducerName}/add`:
            return [
                ...state,
                action.payload
            ];
        default:
            return state;
    }
}