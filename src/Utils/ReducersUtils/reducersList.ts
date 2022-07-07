import IEmail from "../../Models/Interfaces/IEmail";
import Path from "../../Models/Interfaces/IPath";
import { IMailBoxProps } from "../../Models/Interfaces/IMailBoxProps";
import { type } from "@testing-library/user-event/dist/type";

const openPage = (payload: Path) => {
    return {
        type: '@navbar/openPage',
        payload: payload
    }
};

const openDropdown = () => {
    return {
        type: '@dropdown/open'
    }
};
const closeDropdown = () => {
    return {
        type: '@dropdown/close'
    }
};

const searchIn = (search: string) => {
    return {
        type: '@searchBar/search',
        payload: search
    }
};
const resetSearch = () => {
    return {
        type: '@searchBar/resetSearch'
    }
};

const markAsRead = (index: number, reducer: string) => {
    return {
        type: `@email${reducer}/markAsRead`,
        index: index
    }
};

const markAsActive = (index: number, reducer: string) => {
    return {
        type: `@email${reducer}/markAsActive`,
        index: index
    }
};
const unmarkAsActive = (index: number, reducer: string) => {
    return {
        type: `@email${reducer}/unmarkAsActive`,
        index: index
    }
};

const markAsImportant = (index: number, reducer: string) => {
    return {
        type: `@email${reducer}/markAsImportant`,
        index: index
    }
};
const unmarkAsImportant = (index: number, reducer: string) => {
    return {
        type: `@email${reducer}/unmarkAsImportant`,
        index: index
    }
};

const markAsArchive = (index: number, reducer: string) => {
    return {
        type: `@email${reducer}/markAsArchive`,
        index: index
    }
};
const unmarkAsArchive = (index: number) => {
    return {
        type: `@emailArchived/unmarkAsArchive`,
        index: index
    }
};

const add = (email: IEmail, on: string) => {
    return {
        type: `@email${on}/create`,
        payload: email
    }
};
const remove = (index: number, reducer: string) => {
    return {
        type: `@email${reducer}/remove`,
        index: index
    }
};

const markAsSelected = (index: number, reducer: string) => {
    return {
        type: `@email${reducer}/markAsSelected`,
        index: index
    }
};
const unmarkAsSelected = (index: number, reducer: string) => {
    return {
        type: `@email${reducer}/unmarkAsSelected`,
        index: index
    }
};

const isCheck = () => {
    return {
        type: '@checked/check'
    }
};
const isUncheck = () => {
    return {
        type: '@checked/uncheck'
    }
};

const checkAll = (reducer: string) => {
    return {
        type: `@email${reducer}/checkAll`
    }
};
const uncheckAll = (reducer: string) => {
    return {
        type: `@email${reducer}/uncheckAll`
    }
};

const openMailBox = () => {
  return {
      type: `@sendmailbox/open`
  }
}

const closeMailBox = () => {
    return {
        type: `@sendmailbox/close`
    }
}

const minimizeMailBox = () => {
    return {
        type: `@sendmailbox/minimize`
    }
}

const maximizeMailBox = () => {
    return {
        type: `@sendmailbox/maximize`
    }
}

const setMailbox = (props: any) => {
  return {
      type: `@sendmailbox/set`,
      payload: {
          name: props.name,
          to: props.to,
          from: props.from,
          subject: props.subject,
          message: props.message
      }
  }
}

const resetMailBox = () => {
  return{
      type: `@sendmailbox/reset`
  }
}

export {
    openPage,
    closeDropdown,
    openDropdown,
    searchIn,
    resetSearch,
    markAsRead,
    markAsActive,
    markAsArchive,
    markAsSelected,
    markAsImportant,
    add,
    remove,
    unmarkAsActive,
    unmarkAsImportant,
    unmarkAsSelected,
    unmarkAsArchive,
    checkAll,
    uncheckAll,
    isCheck,
    isUncheck,
    openMailBox,
    closeMailBox,
    maximizeMailBox,
    minimizeMailBox,
    setMailbox,
    resetMailBox
}
