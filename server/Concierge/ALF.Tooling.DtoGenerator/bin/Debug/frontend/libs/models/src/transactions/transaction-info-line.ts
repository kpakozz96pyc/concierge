

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class TransactionInfoLine {

    static $name = "TransactionInfoLine";
    static typeNameHint = "ALF.Shared.Dto.Models.Transactions.TransactionInfoLine, ALF.Shared.Dto"

    $type: string;
    payCodeNumber?: number;
    source?: string;
    description?: string;
    quantity?: number;
    hours?: number;
    rate?: number;
    amount?: number;
    isPayable: boolean;
    isQuantityPartOfSum: boolean;
    isHoursPartOfSum: boolean;
    isAmountPartOfSum: boolean;
    yearToDateQuantity?: number;
    yearToDateHours?: number;
    yearToDateAmount?: number;
    startDate?: Date;
    endDate?: Date;

    constructor(data?: Partial<TransactionInfoLine>) {
        Object.assign(this, data);
    }
}
