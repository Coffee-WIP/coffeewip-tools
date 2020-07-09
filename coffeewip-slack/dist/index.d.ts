declare class Slack {
    token: string;
    constructor(token: string);
    usersList: () => Promise<string>;
    private request;
}
export default Slack;
