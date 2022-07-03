import IOption from "../../Models/Interfaces/IOption";

export const dropdownReducer = (state: IOption = {id: 1, name: 'Todo', selected: false}, action: any) => {
    switch (action.type) {
        case '@dropdown/select':
            return action.payload;
        default:
            return {id: 1, name: 'Todo', selected: false};
    }
}