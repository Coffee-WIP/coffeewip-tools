declare class Slack {
    token: string;
    constructor(token: string);
    usersList: () => Promise<string>;
    request: (options: object, content?: object) => Promise<string>;
}
export default Slack;
