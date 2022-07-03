import IOption from "../../Models/Interfaces/IOption";

export const btnReducer = (state: IOption = {id: 0, name: '', selected: false}, action: any) => {
    switch (action.type) {
        case '@btn/select':
            return action.payload;
        default:
            return {id: 0, name: '', selected: false};
    }
}