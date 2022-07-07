import IEmail from "../../Models/Interfaces/IEmail";

export function search(state: Array<IEmail> , searchInput: string){
    return state.filter((item) => {
        return Object.values(item)
            .join("")
            .toLowerCase()
            .includes(searchInput.toLowerCase());
    });
}