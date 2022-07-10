const reducerName = `@alert`;

export const alertReducer = (state: any = {status: false, message: '', delete: false}, action: any) => {
    switch (action.type) {
        case `${reducerName}/open`:
            return {
                ...state,
                status: true
            };
        case `${reducerName}/close`:
            return {
                ...state,
                status: false
            };
        case `${reducerName}/message`:
            return {
                ...state,
                message: action.payload
            };
        case `${reducerName}/resetMessage`:
            return {
                ...state,
                message: ''
            };
        case `${reducerName}/isDeleting`:
            return {
                ...state,
                delete: true
            };
        case `${reducerName}/deleteDone`:
            return {
                ...state,
                delete: false
            };
        default:
            return state;
    }
}