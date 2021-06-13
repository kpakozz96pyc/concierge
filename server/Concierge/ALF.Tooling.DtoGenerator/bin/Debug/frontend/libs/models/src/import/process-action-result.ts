
import { VariableTransactionImportHeapId } from "./variable-transaction-import-heap";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class ProcessActionResult {

    static $name = "ProcessActionResult";
    static typeNameHint = "ALF.Shared.Dto.Models.Import.ProcessActionResult, ALF.Shared.Dto"

    sourceHeap?: VariableTransactionImportHeapId;
    newHeap?: VariableTransactionImportHeapId;

    constructor(data?: Partial<ProcessActionResult>) {
        Object.assign(this, data);
    }
}
