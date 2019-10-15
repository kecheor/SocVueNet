export default class UserApi {

    endpoint: string = "http://localhost:49737/api/user";
    /**
     * Login
username: string, password: string     */

    public Login(login: string, password: string) {
        const requestHeaders: HeadersInit = new Headers();
        requestHeaders.set('Content-Type', 'application/json');
        fetch(`${this.endpoint}/authenticate`, {
            method: 'post',
            headers: requestHeaders,
            body: JSON.stringify({ login, password })
        })
        .then( (value: Response) => {
            alert(value.body);
            return true;
        })
    }


}