import IEmail from "../../Models/Interfaces/IEmail";
import Path from "../../Models/Interfaces/IPath";

export const openPage = (payload: Path) => {
    return {
        type: '@navbar/openPage',
        payload: payload
    }
};

export const openDropdown = () => {
    return {
        type: '@dropdown/open'
    }
};
export const closeDropdown = () => {
    return {
        type: '@dropdown/close'
    }
};

export const searchIn = (search: string) => {
    return {
        type: '@searchBar/search',
        payload: search
    }
};
export const resetSearch = () => {
    return {
        type: '@searchBar/resetSearch'
    }
};

export const markAsRead = (index: number, reducer: string) => {
    return {
        type: `@email${reducer}/markAsRead`,
        index: index
    }
};

export const markAsActive = (index: number, reducer: string) => {
    return {
        type: `@email${reducer}/markAsActive`,
        index: index
    }
};
export const unmarkAsActive = (index: number, reducer: string) => {
    return {
        type: `@email${reducer}/unmarkAsActive`,
        index: index
    }
};

export const markAsImportant = (index: number, reducer: string) => {
    return {
        type: `@email${reducer}/markAsImportant`,
        index: index
    }
};
export const unmarkAsImportant = (index: number, reducer: string) => {
    return {
        type: `@email${reducer}/unmarkAsImportant`,
        index: index
    }
};

export const markAsArchive = (index: number, reducer: string) => {
    return {
        type: `@email${reducer}/markAsArchive`,
        index: index
    }
};
export const unmarkAsArchive = (index: number) => {
    return {
        type: `@emailArchived/unmarkAsArchive`,
        index: index
    }
};

export const add = (email: IEmail, on: string) => {
    return {
        type: `@email${on}/create`,
        payload: email
    }
};
export const remove = (index: number, reducer: string) => {
    return {
        type: `@email${reducer}/remove`,
        index: index
    }
};

export const markAsSelected = (index: number, reducer: string) => {
    return {
        type: `@email${reducer}/markAsSelected`,
        index: index
    }
};
export const unmarkAsSelected = (index: number, reducer: string) => {
    return {
        type: `@email${reducer}/unmarkAsSelected`,
        index: index
    }
};

export const isCheck = () => {
    return {
        type: '@checked/check'
    }
};
export const isUncheck = () => {
    return {
        type: '@checked/uncheck'
    }
};

export const checkAll = (reducer: string) => {
    return {
        type: `@email${reducer}/checkAll`
    }
};
export const uncheckAll = (reducer: string) => {
    return {
        type: `@email${reducer}/uncheckAll`
    }
};