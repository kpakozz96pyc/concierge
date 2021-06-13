

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class VariableImportTransactionAction {

    static $name = "VariableImportTransactionAction";
    static typeNameHint = "ALF.Shared.Dto.Models.Import.VariableImportTransactionAction, ALF.Shared.Dto"

    $type: string;
    variableTransactionImportHeapId?: string;
    transactionIds: string[] = [];

    constructor(data?: Partial<VariableImportTransactionAction>) {
        Object.assign(this, data);
    }
}
