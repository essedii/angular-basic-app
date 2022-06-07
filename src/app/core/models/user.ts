export interface ICredentials {
    email: string;
    password?: string;
}

export interface IUser extends ICredentials {
    id: string;
    username: string;
}
