
import { VariableImportTransactionAction } from "@alf/models/import/variable-import-transaction-action";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class DeleteAction extends VariableImportTransactionAction {

    static $name = "DeleteAction";
    static typeNameHint = "ALF.Shared.Dto.Models.Import.DeleteAction, ALF.Shared.Dto"



    constructor(data?: Partial<DeleteAction>) {
        super(data);
        Object.assign(this, data);
        this.$type = DeleteAction.typeNameHint;
    }
}
