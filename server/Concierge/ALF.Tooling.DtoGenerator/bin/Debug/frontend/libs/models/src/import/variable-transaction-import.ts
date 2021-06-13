
import { VariableTransactionImportStatus } from "./enums/variable-transaction-import-status";
import { ImportSourceId } from "./import-source";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export type VariableTransactionImportId = string;

export class VariableTransactionImport {

    static $name = "VariableTransactionImport";
    static typeNameHint = "ALF.Shared.Dto.Models.Import.VariableTransactionImport, ALF.Shared.Dto"

    id: VariableTransactionImportId;
    source: ImportSourceId;
    contextCompanyId?: string;
    directImport: boolean;
    earliestImportPeriodNumber?: number;
    heapCount: number;
    transactionCount: number;
    importedTransactionCount: number;
    rejectedTransactionCount: number;
    deletedTransactionCount: number;
    sumNumber: number;
    sumHours: number;
    sumAmount: number;
    changed: Date;
    lastChangedBy?: string;
    isAutoImport?: boolean;
    containsCompanyIds: string[] = [];
    importDefinitionCompanyId?: string;
    importDefinitionId?: string;
    status: VariableTransactionImportStatus;
    waitingForJobId?: string;
    companyCount?: number;

    constructor(data?: Partial<VariableTransactionImport>) {
        Object.assign(this, data);
    }
}
