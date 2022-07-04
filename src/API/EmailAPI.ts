import IEmail from "../Models/Interfaces/IEmail";

export function getArchivedEmails() {
    let emails: Array<IEmail> = new Array<IEmail>();

    emailList.forEach((email: IEmail) => {
       if (email.archive) {
           emails.push(email);
       }
    });

    return emails;
}

export function getInboxEmails() {
    let emails: Array<IEmail> = new Array<IEmail>();

    emailList.forEach((email: IEmail) => {
        if (!email.archive && email.context === 'inbox') {
            emails.push(email);
        }
    });

    return emails;
}

export function getSentEmails() {
    let emails: Array<IEmail> = new Array<IEmail>();

    emailList.forEach((email: IEmail) => {
        if (!email.archive && email.context === 'send') {
            emails.push(email);
        }
    });

    return emails;
}

const emailList = [
    {
        index: 1,
        context: "send",
        subject: "Test 1",
        message: "Admission any buysellads TypeScriptGeneratedFilesManager selected ",
        name: "17i7dby3fgn5npix4w",
        from: "jov6ji63um4dg",
        to: "mtfdbinquf7fga6dn9ii",
        date: "urxvjalnxf2nk95567",
        important: false,
        selected: false,
        active: false,
        read: true,
        archive: true
    },
    {
        index: 2,
        context: "send",
        subject: "2sioqmz32hyac28p",
        message: "6kbf7j08",
        name: "17i7dby3fgn5npix4w",
        from: "jov6ji63um4dg",
        to: "mtfdbinquf7fga6dn9ii",
        date: "urxvjalnxf2nk95567",
        important: true,
        selected: false,
        active: false,
        read: true,
        archive: true
    },
    {
        index: 3,
        context: "inbox",
        subject: "2sioqmz32hyac28p",
        message: "6kbf7j08",
        name: "17i7dby3fgn5npix4w",
        from: "jov6ji63um4dg",
        to: "mtfdbinquf7fga6dn9ii",
        date: "urxvjalnxf2nk95567",
        important: true,
        selected: false,
        active: false,
        read: false,
        archive: false
    },
    {
        index: 4,
        context: "inbox",
        subject: "2sioqmz32hyac28p",
        message: "6kbf7j08",
        name: "17i7dby3fgn5npix4w",
        from: "jov6ji63um4dg",
        to: "mtfdbinquf7fga6dn9ii",
        date: "urxvjalnxf2nk95567",
        important: true,
        selected: false,
        active: false,
        read: false,
        archive: false
    },
    {
        index: 5,
        context: "send",
        subject: "2sioqmz32hyac28p",
        message: "6kbf7j08",
        name: "17i7dby3fgn5npix4w",
        from: "jov6ji63um4dg",
        to: "mtfdbinquf7fga6dn9ii",
        date: "urxvjalnxf2nk95567",
        important: false,
        selected: false,
        active: false,
        read: true,
        archive: false
    },
    {
        index: 6,
        context: "send",
        subject: "2sioqmz32hyac28p",
        message: "6kbf7j08",
        name: "17i7dby3fgn5npix4w",
        from: "jov6ji63um4dg",
        to: "mtfdbinquf7fga6dn9ii",
        date: "urxvjalnxf2nk95567",
        important: false,
        selected: false,
        active: false,
        read: false,
        archive: false
    }
];