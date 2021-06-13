
import { VariableImportTransactionAction } from "@alf/models/import/variable-import-transaction-action";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class ImportAction extends VariableImportTransactionAction {

    static $name = "ImportAction";
    static typeNameHint = "ALF.Shared.Dto.Models.Import.ImportAction, ALF.Shared.Dto"

    periodId?: string;

    constructor(data?: Partial<ImportAction>) {
        super(data);
        Object.assign(this, data);
        this.$type = ImportAction.typeNameHint;
    }
}
