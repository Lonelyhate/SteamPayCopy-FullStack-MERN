export interface IUser {
    login: string;
    password: string;
}

export interface IError {
    response: {
        data: {message: string}
        status: number
        statusText: string
    }
}