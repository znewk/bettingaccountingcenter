export interface AccountingBetType {
    fullname: string,
    iin: string,
    betsName: string,
    walletId: string,
    betId: string,
    event: string,
    eventDate: string,
    eventCategory: string,
    betOutcome: string,
    coefficient: string,
    betResult: string,
    status: string,
    winingAmout: string,
}


export interface AccountingTransactionType {
    fullname: string,
    iin: string,
    walletId: string,
    betId: string,
    transactionType: string,
    amount: string,
    betsName: string,
    BVU: string,
    accountNumber: string,
    operationDate: string,
}