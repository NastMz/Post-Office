export function search(state: any, searchInput: string) {
    return state.filter((item: any) => {
        return Object.values(item)
            .join("")
            .toLowerCase()
            .includes(searchInput.toLowerCase());
    });
}