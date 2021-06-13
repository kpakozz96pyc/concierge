

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class RetroPayTransaction {

    static $name = "RetroPayTransaction";
    static typeNameHint = "ALF.Shared.Dto.Models.RetroPay.RetroPayTransaction, ALF.Shared.Dto"

    id: string;
    retroPayId: string;
    retroPayTransactionDeltaId: number;
    companyId?: string;
    heapNumber: number;
    periodNumber: number;
    employeeNumber: number;
    payCode: number;
    transactionSequenceNumber: number;

    constructor(data?: Partial<RetroPayTransaction>) {
        Object.assign(this, data);
    }
}
