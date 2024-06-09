export interface User {
    token: string | null;
    name: string | null;
    roles: string[] | null;
    isLogged: boolean;
}

export interface LoginPayload {
    login: string;
    password: string;
}

export interface UserResponse {
    token: string | null;
    name: string | null;
    roles: string[] | null;
}