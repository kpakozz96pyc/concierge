

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class TransactionFieldInput {

    static $name = "TransactionFieldInput";
    static typeNameHint = "ALF.Shared.Dto.Models.Transactions.TransactionFieldInput, ALF.Shared.Dto"

    id: string;
    lookupId?: string;
    isRequired: boolean;

    constructor(data?: Partial<TransactionFieldInput>) {
        Object.assign(this, data);
    }
}
