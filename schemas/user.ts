export interface User {
    token: string | null;
    name: string | null;
    roles: string[] | null;
}

export interface LoginPayload {
    login: string;
    password: string;
}