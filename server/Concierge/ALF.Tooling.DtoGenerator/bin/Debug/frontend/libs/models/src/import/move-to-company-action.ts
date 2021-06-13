
import { VariableImportTransactionAction } from "@alf/models/import/variable-import-transaction-action";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class MoveToCompanyAction extends VariableImportTransactionAction {

    static $name = "MoveToCompanyAction";
    static typeNameHint = "ALF.Shared.Dto.Models.Import.MoveToCompanyAction, ALF.Shared.Dto"

    companyId?: string;

    constructor(data?: Partial<MoveToCompanyAction>) {
        super(data);
        Object.assign(this, data);
        this.$type = MoveToCompanyAction.typeNameHint;
    }
}
