import IEmail from "../Interfaces/IEmail";

export default class Email implements IEmail {
    active: boolean;
    archive: boolean;
    context: string;
    date: string;
    from: string;
    important: boolean;
    index: number;
    message: string;
    from_name: string;
    to_name: string;
    read: boolean;
    selected: boolean;
    subject: string;
    to: string;

    constructor() {
        this.index = 0;
        this.to = '';
        this.from = '';
        this.subject = '';
        this.message = '';
        this.selected = false;
        this.active = false;
        this.date = '';
        this.important = false;
        this.to_name = '';
        this.from_name = '';
        this.read = false;
        this.archive = false;
        this.context = '';
    }
}