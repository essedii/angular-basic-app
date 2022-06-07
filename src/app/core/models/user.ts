export interface ICredentials {
    email: string;
    password?: string;
}

export interface IUser extends ICredentials {
    id: string;
    username: string;
    // image?: any;
    accountType: string;
}

// export enum AccountTypes {
//     user = 'user',
//     admin = 'admin'
// }
