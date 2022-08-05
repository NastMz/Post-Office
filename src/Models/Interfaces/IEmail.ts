export default interface IEmail {
    index: number;
    context: string;
    subject: string;
    message: string;
    from_name: string;
    to_name: string;
    from: string;
    to: string;
    date: string;
    important: boolean;
    selected: boolean;
    active: boolean;
    read: boolean;
    archive: boolean;
}