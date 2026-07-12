

export interface CreateUsrPayload {
    name: string;
    email: string;
    password: string;
    role?: string;
    profilePhoto?:string;
}

export interface LoginUserPayload {
    email:string;
    password: string;
}