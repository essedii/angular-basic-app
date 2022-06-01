export interface ICredentials {
    email: string;
    password: string;
}

export interface IUser extends ICredentials {
    username: string;
    image?: any;
    role?: ['admin', 'user']
}

export enum AccountTypes {
    user = 'user',
    admin = 'admin'
}
