export interface VerifyPayload {
    iin: string;
    scope: string;
}

export interface VerifyResponse {
    data: any
}

export interface ScoringData {
    message: string,
    success: boolean,
    returnUrl: string
}