
import { VariableTransactionImportId } from "../import/variable-transaction-import";
import { CompanyId } from "../core/company";
import { ImportDefinitionId } from "../import/import-definition";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class RetryVariableTransactionImportAction {

    static $name = "RetryVariableTransactionImportAction";
    static typeNameHint = "ALF.Shared.Dto.Models.Import.Actions.TransactionImport.RetryVariableTransactionImportAction, ALF.Shared.Dto"

    transactionImportId: VariableTransactionImportId;
    companyId: CompanyId;
    importDefinitionId: ImportDefinitionId;

    constructor(data?: Partial<RetryVariableTransactionImportAction>) {
        Object.assign(this, data);
    }
}
