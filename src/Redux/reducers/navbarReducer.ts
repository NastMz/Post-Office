import Path from "../../Models/Interfaces/IPath";

const reducerName = `@navbar`;

const path = {
    index: 0,
    pathname: '/'
}

export const navbarReducer = (state: Path = path, action: any) => {
    switch (action.type) {
        case `${reducerName}/openPage`:
            return action.payload;
        default:
            return state;
    }
}