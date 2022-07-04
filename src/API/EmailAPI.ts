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
        subject: "metus. In lorem. Donec elementum, lorem ut aliquam iaculis, lacus",
        message: "lacinia vitae, sodales at, velit. Pellentesque ultricies dignissim lacus. Aliquam rutrum lorem ac risus. Morbi metus. Vivamus euismod urna. Nullam lobortis quam a felis ullamcorper viverra. Maecenas iaculis aliquet diam. Sed diam lorem, auctor quis, tristique ac, eleifend vitae, erat. Vivamus nisi. Mauris nulla. Integer urna. Vivamus molestie dapibus ligula. Aliquam erat volutpat. Nulla dignissim. Maecenas ornare egestas ligula. Nullam feugiat placerat velit. Quisque varius. Nam porttitor scelerisque neque. Nullam nisl. Maecenas malesuada fringilla est. Mauris eu turpis.",
        from: "pede.et@yahoo.edu",
        name: "Lenore Randolph",
        to: "velit.pellentesque.ultricies@protonmail.ca",
        date: "Jun 14, 2023",
        important: false,
        selected: false,
        active: false,
        read: false,
        archive: true,
        context: "send"
    },
    {
        index: 2,
        subject: "orci, consectetuer euismod est arcu ac orci. Ut semper",
        message: "penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean eget magna. Suspendisse tristique neque venenatis lacus. Etiam bibendum fermentum metus. Aenean sed pede nec ante blandit viverra. Donec tempus, lorem fringilla ornare placerat, orci lacus vestibulum lorem, sit amet ultricies sem magna nec quam. Curabitur vel lectus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec dignissim magna a tortor. Nunc commodo auctor velit. Aliquam nisl. Nulla eu neque pellentesque massa lobortis ultrices. Vivamus rhoncus. Donec est. Nunc",
        from: "quisque.purus@outlook.net",
        name: "Leila Giles",
        to: "odio.phasellus@aol.ca",
        date: "Feb 2, 2022",
        important: false,
        selected: false,
        active: false,
        read: true,
        archive: false,
        context: "inbox"
    },
    {
        index: 3,
        subject: "magna. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
        message: "feugiat placerat velit. Quisque varius. Nam porttitor scelerisque neque. Nullam nisl. Maecenas malesuada fringilla est. Mauris eu turpis. Nulla aliquet. Proin velit. Sed malesuada augue ut lacus. Nulla tincidunt, neque vitae semper egestas, urna justo faucibus lectus, a sollicitudin orci sem eget massa. Suspendisse eleifend. Cras sed leo. Cras vehicula aliquet libero. Integer in magna. Phasellus dolor elit, pellentesque a, facilisis non, bibendum sed, est. Nunc laoreet lectus quis massa. Mauris vestibulum, neque sed dictum eleifend, nunc risus varius orci, in consequat enim diam vel arcu. Curabitur ut odio vel est tempor bibendum.",
        from: "nulla.tempor.augue@outlook.edu",
        name: "Deanna Clements",
        to: "eget.tincidunt@aol.net",
        date: "Oct 19, 2021",
        important: true,
        selected: false,
        active: false,
        read: true,
        archive: true,
        context: "send"
    },
    {
        index: 4,
        subject: "arcu vel quam dignissim pharetra.",
        message: "tellus justo sit amet nulla. Donec non justo. Proin non massa non ante bibendum ullamcorper. Duis cursus, diam at pretium aliquet, metus urna convallis erat, eget tincidunt dui augue eu tellus. Phasellus elit pede, malesuada vel, venenatis vel, faucibus id, libero. Donec consectetuer mauris id sapien. Cras dolor dolor, tempus non, lacinia at, iaculis quis, pede. Praesent eu dui. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean eget magna.",
        from: "quis@hotmail.org",
        name: "Irene Luna",
        to: "arcu.ac@icloud.ca",
        date: "Nov 13, 2022",
        important: true,
        selected: false,
        active: false,
        read: true,
        archive: false,
        context: "inbox"
    },
    {
        index: 5,
        subject: "aliquet diam. Sed",
        message: "cursus, diam at pretium aliquet, metus urna convallis erat, eget tincidunt dui augue eu tellus. Phasellus elit pede, malesuada vel, venenatis vel, faucibus id, libero. Donec consectetuer mauris id sapien. Cras dolor dolor, tempus non, lacinia at, iaculis quis, pede. Praesent eu dui. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean eget magna. Suspendisse tristique neque venenatis lacus. Etiam bibendum fermentum metus. Aenean sed pede nec ante blandit viverra. Donec tempus, lorem fringilla ornare placerat, orci lacus vestibulum",
        from: "pede.nunc@icloud.ca",
        name: "Preston Mcintyre",
        to: "proin.ultrices.duis@outlook.edu",
        date: "Aug 29, 2022",
        important: true,
        selected: false,
        active: false,
        read: false,
        archive: false,
        context: "send"
    },
    {
        index: 6,
        subject: "egestas. Aliquam nec enim. Nunc ut erat. Sed nunc",
        message: "euismod et, commodo at, libero. Morbi accumsan laoreet ipsum. Curabitur consequat, lectus sit amet luctus vulputate, nisi sem semper erat, in consectetuer ipsum nunc id enim. Curabitur massa. Vestibulum accumsan neque et nunc. Quisque ornare tortor at risus. Nunc ac sem ut dolor dapibus gravida. Aliquam tincidunt, nunc ac mattis ornare, lectus ante",
        from: "orci.ut.semper@hotmail.com",
        name: "Kyle Patrick",
        to: "vitae@yahoo.org",
        date: "Jan 15, 2023",
        important: true,
        selected: false,
        active: false,
        read: false,
        archive: false,
        context: "inbox"
    },
    {
        index: 7,
        subject: "sit amet, consectetuer adipiscing elit. Etiam laoreet, libero et",
        message: "eu arcu. Morbi sit amet massa. Quisque porttitor eros nec tellus. Nunc lectus pede, ultrices a, auctor non, feugiat nec, diam. Duis mi enim, condimentum eget, volutpat ornare, facilisis eget, ipsum. Donec sollicitudin adipiscing ligula. Aenean gravida nunc sed pede. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin vel arcu eu odio tristique pharetra.",
        from: "libero@google.net",
        name: "Irma Williamson",
        to: "phasellus.elit@aol.ca",
        date: "Apr 2, 2022",
        important: true,
        selected: false,
        active: false,
        read: true,
        archive: false,
        context: "send"
    },
    {
        index: 8,
        subject: "ullamcorper magna. Sed eu eros.",
        message: "non, luctus sit amet, faucibus ut, nulla. Cras eu tellus eu augue porttitor interdum. Sed auctor odio a purus. Duis elementum, dui quis accumsan convallis, ante lectus convallis est, vitae sodales nisi magna sed dui. Fusce aliquam, enim nec tempus scelerisque, lorem ipsum sodales purus, in molestie tortor nibh sit amet orci. Ut sagittis lobortis mauris. Suspendisse aliquet molestie tellus. Aenean egestas hendrerit neque. In ornare sagittis felis. Donec tempor, est ac mattis semper, dui lectus rutrum urna, nec luctus felis purus ac tellus. Suspendisse sed dolor. Fusce mi lorem, vehicula",
        from: "sollicitudin.a.malesuada@aol.ca",
        name: "Jillian Acevedo",
        to: "et.nunc@google.ca",
        date: "Jun 8, 2022",
        important: false,
        selected: false,
        active: false,
        read: false,
        archive: false,
        context: "inbox"
    },
    {
        index: 9,
        subject: "hendrerit consectetuer, cursus et, magna.",
        message: "facilisis, magna tellus faucibus leo, in lobortis tellus justo sit amet nulla. Donec non justo. Proin non massa non ante bibendum ullamcorper. Duis cursus, diam at pretium aliquet, metus urna convallis erat, eget tincidunt dui augue eu tellus. Phasellus elit pede, malesuada vel, venenatis vel, faucibus id, libero. Donec consectetuer mauris id sapien. Cras dolor dolor, tempus non, lacinia at, iaculis quis, pede. Praesent eu dui. Cum sociis natoque",
        from: "enim.curabitur.massa@icloud.com",
        name: "Kai Schneider",
        to: "enim.consequat@icloud.net",
        date: "Dec 9, 2021",
        important: true,
        selected: false,
        active: false,
        read: true,
        archive: false,
        context: "send"
    },
    {
        index: 10,
        subject: "nec quam. Curabitur vel lectus. Cum sociis natoque penatibus",
        message: "mattis velit justo nec ante. Maecenas mi felis, adipiscing fringilla, porttitor vulputate, posuere vulputate, lacus. Cras interdum. Nunc sollicitudin commodo ipsum. Suspendisse non leo. Vivamus nibh dolor, nonummy ac, feugiat non, lobortis quis, pede. Suspendisse dui. Fusce diam nunc, ullamcorper eu, euismod ac, fermentum vel, mauris. Integer sem elit, pharetra ut, pharetra sed, hendrerit a, arcu. Sed et libero. Proin mi. Aliquam gravida mauris ut mi. Duis risus odio, auctor vitae, aliquet",
        from: "arcu.vestibulum@outlook.com",
        name: "Lacy Hoffman",
        to: "nibh.dolor.nonummy@aol.edu",
        date: "Jun 20, 2023",
        important: true,
        selected: false,
        active: false,
        read: true,
        archive: true,
        context: "inbox"
    },
    {
        index: 11,
        subject: "vel, vulputate",
        message: "magna. Suspendisse tristique neque venenatis lacus. Etiam bibendum fermentum metus. Aenean sed pede nec ante blandit viverra. Donec tempus, lorem fringilla ornare placerat, orci lacus vestibulum lorem, sit amet ultricies sem magna nec quam. Curabitur vel lectus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec dignissim magna a tortor. Nunc commodo auctor velit. Aliquam nisl. Nulla eu neque pellentesque massa lobortis ultrices. Vivamus rhoncus. Donec est. Nunc ullamcorper, velit in aliquet lobortis, nisi nibh",
        from: "egestas.fusce@hotmail.couk",
        name: "Uriel Nicholson",
        to: "quam@outlook.couk",
        date: "Nov 2, 2021",
        important: true,
        selected: false,
        active: false,
        read: false,
        archive: true,
        context: "inbox"
    },
    {
        index: 12,
        subject: "eu erat semper rutrum. Fusce",
        message: "gravida nunc sed pede. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin vel arcu eu odio tristique pharetra. Quisque ac libero nec ligula consectetuer rhoncus. Nullam velit dui, semper et, lacinia vitae, sodales at, velit. Pellentesque ultricies dignissim lacus. Aliquam rutrum lorem ac risus. Morbi metus. Vivamus euismod urna. Nullam lobortis quam a felis ullamcorper viverra. Maecenas iaculis aliquet diam. Sed diam lorem, auctor quis, tristique ac, eleifend vitae, erat. Vivamus nisi. Mauris nulla.",
        from: "parturient.montes@google.edu",
        name: "Xena Stuart",
        to: "erat.vitae@hotmail.net",
        date: "Nov 21, 2022",
        important: false,
        selected: false,
        active: false,
        read: true,
        archive: false,
        context: "send"
    },
    {
        index: 13,
        subject: "velit. Pellentesque ultricies dignissim lacus.",
        message: "mollis lectus pede et risus. Quisque libero lacus, varius et, euismod et, commodo at, libero. Morbi accumsan laoreet ipsum. Curabitur consequat, lectus sit amet luctus vulputate, nisi sem semper erat, in consectetuer ipsum nunc id enim. Curabitur massa. Vestibulum accumsan neque et nunc. Quisque ornare tortor at risus. Nunc ac sem ut dolor dapibus gravida. Aliquam tincidunt, nunc ac mattis ornare, lectus ante dictum mi, ac mattis velit justo nec ante. Maecenas mi felis, adipiscing fringilla, porttitor vulputate, posuere vulputate, lacus. Cras interdum. Nunc sollicitudin commodo ipsum. Suspendisse non leo. Vivamus",
        from: "sem.molestie@google.couk",
        name: "Daniel Vaughn",
        to: "montes@outlook.couk",
        date: "Jan 7, 2022",
        important: false,
        selected: false,
        active: false,
        read: true,
        archive: true,
        context: "inbox"
    },
    {
        index: 14,
        subject: "Quisque imperdiet, erat nonummy ultricies ornare, elit elit fermentum",
        message: "elit. Etiam laoreet, libero et tristique pellentesque, tellus sem mollis dui, in sodales elit erat vitae risus. Duis a mi fringilla mi lacinia mattis. Integer eu lacus. Quisque imperdiet, erat nonummy ultricies ornare, elit elit fermentum risus, at fringilla purus mauris a nunc. In at pede. Cras vulputate velit eu sem. Pellentesque ut ipsum ac mi eleifend egestas. Sed pharetra, felis eget varius ultrices, mauris ipsum porta elit, a feugiat tellus lorem eu metus. In lorem. Donec elementum, lorem ut aliquam iaculis, lacus pede sagittis augue,",
        from: "elit.nulla.facilisi@outlook.couk",
        name: "Lee Henry",
        to: "commodo.at.libero@yahoo.ca",
        date: "Jun 26, 2022",
        important: true,
        selected: false,
        active: false,
        read: false,
        archive: true,
        context: "inbox"
    },
    {
        index: 15,
        subject: "posuere at,",
        message: "primis in faucibus orci luctus et ultrices posuere cubilia Curae Donec tincidunt. Donec vitae erat vel pede blandit congue. In scelerisque scelerisque dui. Suspendisse ac metus vitae velit egestas lacinia. Sed congue, elit sed consequat auctor, nunc nulla vulputate dui, nec tempus mauris erat eget ipsum. Suspendisse sagittis. Nullam vitae diam. Proin dolor. Nulla semper tellus id nunc interdum feugiat. Sed nec metus facilisis lorem tristique aliquet. Phasellus fermentum convallis ligula. Donec",
        from: "luctus@google.edu",
        name: "Zorita Roy",
        to: "nec.euismod@outlook.couk",
        date: "Feb 4, 2022",
        important: true,
        selected: false,
        active: false,
        read: true,
        archive: true,
        context: "send"
    },
    {
        index: 16,
        subject: "ut aliquam iaculis, lacus pede sagittis",
        message: "odio. Etiam ligula tortor, dictum eu, placerat eget, venenatis a, magna. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Etiam laoreet, libero et tristique pellentesque, tellus sem mollis dui, in sodales elit erat vitae risus. Duis a mi fringilla mi lacinia mattis. Integer eu lacus. Quisque imperdiet, erat nonummy ultricies ornare, elit elit fermentum risus, at fringilla purus mauris a nunc. In at pede. Cras vulputate velit eu sem. Pellentesque ut ipsum ac mi eleifend egestas. Sed pharetra, felis eget varius ultrices, mauris ipsum porta elit, a feugiat tellus lorem eu metus. In lorem. Donec",
        from: "curae@icloud.com",
        name: "Allegra Ingram",
        to: "tempor.bibendum@aol.com",
        date: "Mar 17, 2023",
        important: true,
        selected: false,
        active: false,
        read: true,
        archive: false,
        context: "inbox"
    },
    {
        index: 17,
        subject: "amet diam eu dolor egestas rhoncus. Proin nisl sem,",
        message: "a mi fringilla mi lacinia mattis. Integer eu lacus. Quisque imperdiet, erat nonummy ultricies ornare, elit elit fermentum risus, at fringilla purus mauris a nunc. In at pede. Cras vulputate velit eu sem. Pellentesque ut ipsum ac mi eleifend egestas. Sed pharetra, felis eget varius ultrices, mauris ipsum porta elit, a feugiat tellus lorem eu metus. In lorem. Donec elementum, lorem ut aliquam iaculis, lacus pede sagittis augue, eu tempor erat neque non quam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac",
        from: "curabitur.dictum@hotmail.couk",
        name: "Ezra Curtis",
        to: "vulputate@google.couk",
        date: "Jan 30, 2023",
        important: true,
        selected: false,
        active: false,
        read: false,
        archive: false,
        context: "send"
    },
    {
        index: 18,
        subject: "Maecenas ornare egestas ligula.",
        message: "nec tempus scelerisque, lorem ipsum sodales purus, in molestie tortor nibh sit amet orci. Ut sagittis lobortis mauris. Suspendisse aliquet molestie tellus. Aenean egestas hendrerit neque. In ornare sagittis felis. Donec tempor, est ac mattis semper, dui lectus rutrum urna, nec luctus felis purus ac tellus. Suspendisse sed dolor. Fusce mi lorem, vehicula et, rutrum eu, ultrices sit amet, risus. Donec nibh enim, gravida sit amet, dapibus id, blandit at, nisi. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin vel nisl. Quisque fringilla euismod enim. Etiam gravida molestie",
        from: "nisi.aenean@outlook.org",
        name: "Sybil Robbins",
        to: "lorem@yahoo.couk",
        date: "May 28, 2022",
        important: true,
        selected: false,
        active: false,
        read: false,
        archive: true,
        context: "inbox"
    },
    {
        index: 19,
        subject: "tortor. Integer aliquam adipiscing lacus. Ut",
        message: "ut odio vel est tempor bibendum. Donec felis orci, adipiscing non, luctus sit amet, faucibus ut, nulla. Cras eu tellus eu augue porttitor interdum. Sed auctor odio a purus. Duis elementum, dui quis accumsan convallis, ante lectus convallis est, vitae sodales nisi magna sed dui. Fusce aliquam, enim nec tempus scelerisque, lorem ipsum sodales purus, in molestie tortor nibh sit amet orci. Ut sagittis lobortis mauris. Suspendisse aliquet molestie tellus. Aenean egestas hendrerit neque. In ornare sagittis felis. Donec tempor, est ac mattis semper, dui lectus rutrum urna, nec luctus felis",
        from: "feugiat@protonmail.couk",
        name: "Warren Barnes",
        to: "morbi.non.sapien@hotmail.ca",
        date: "Aug 27, 2022",
        important: false,
        selected: false,
        active: false,
        read: true,
        archive: true,
        context: "send"
    },
    {
        index: 20,
        subject: "justo. Proin non",
        message: "facilisi. Sed neque. Sed eget lacus. Mauris non dui nec urna suscipit nonummy. Fusce fermentum fermentum arcu. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae Phasellus ornare. Fusce mollis. Duis sit amet diam eu dolor egestas rhoncus. Proin nisl sem, consequat nec, mollis vitae, posuere at, velit. Cras lorem lorem, luctus ut, pellentesque eget, dictum placerat,",
        from: "dictum.sapien.aenean@protonmail.net",
        name: "Rama Wynn",
        to: "praesent@outlook.ca",
        date: "Mar 26, 2022",
        important: false,
        selected: false,
        active: false,
        read: false,
        archive: true,
        context: "inbox"
    }
];