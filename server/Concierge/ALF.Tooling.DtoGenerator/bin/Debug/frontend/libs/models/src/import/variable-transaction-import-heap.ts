
import { VariableTransactionImportHeapStatus } from "./enums/variable-transaction-import-heap-status";
import { VariableTransactionImportHeapModifiedInType } from "./enums/variable-transaction-import-heap-modified-in-type";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export type VariableTransactionImportHeapId = string;

export class VariableTransactionImportHeap {

    static $name = "VariableTransactionImportHeap";
    static typeNameHint = "ALF.Shared.Dto.Models.Import.VariableTransactionImportHeap, ALF.Shared.Dto"

    id: VariableTransactionImportHeapId;
    companyId: string;
    heapNumber: number;
    periodId?: string;
    variableTransactionImportId?: string;
    created: Date;
    generated?: Date;
    imported?: Date;
    description?: string;
    sumNumber: number;
    sumHours: number;
    sumAmount: number;
    heapModifiedIn?: VariableTransactionImportHeapModifiedInType;
    periodNumber?: number;
    waitingForJobId?: string;
    changed?: Date;
    lastChangedBy?: string;
    importStatus: VariableTransactionImportHeapStatus;
    transactionCount?: number;
    employeeCount?: number;
    rejectedCount?: number;

    constructor(data?: Partial<VariableTransactionImportHeap>) {
        Object.assign(this, data);
    }
}
