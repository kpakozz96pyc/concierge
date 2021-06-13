
import { VariableImportTransactionAction } from "@alf/models/import/variable-import-transaction-action";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class MoveToNewHeapAction extends VariableImportTransactionAction {

    static $name = "MoveToNewHeapAction";
    static typeNameHint = "ALF.Shared.Dto.Models.Import.MoveToNewHeapAction, ALF.Shared.Dto"

    periodId?: string;

    constructor(data?: Partial<MoveToNewHeapAction>) {
        super(data);
        Object.assign(this, data);
        this.$type = MoveToNewHeapAction.typeNameHint;
    }
}
