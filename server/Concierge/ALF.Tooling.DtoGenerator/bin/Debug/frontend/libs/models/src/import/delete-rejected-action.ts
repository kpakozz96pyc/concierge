
import { VariableImportTransactionAction } from "@alf/models/import/variable-import-transaction-action";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class DeleteRejectedAction extends VariableImportTransactionAction {

    static $name = "DeleteRejectedAction";
    static typeNameHint = "ALF.Shared.Dto.Models.Import.DeleteRejectedAction, ALF.Shared.Dto"



    constructor(data?: Partial<DeleteRejectedAction>) {
        super(data);
        Object.assign(this, data);
        this.$type = DeleteRejectedAction.typeNameHint;
    }
}
