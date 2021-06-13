
import { FinanceTransferHeapStatus } from "./enums/finance-transfer-heap-status";
import { FinanceTransferHeapHeadStatus } from "./enums/finance-transfer-heap-head-status";
import { FinanceTransferHeapJobStatus } from "./enums/finance-transfer-heap-job-status";
import { FinanceSystemMetadata } from "./finance-system-metadata";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class FinanceTransferHeapEditableFields {

    static $name = "FinanceTransferHeapEditableFields";
    static typeNameHint = "ALF.Shared.Dto.Models.Transfers.FinanceTransferHeapEditableFields, ALF.Shared.Dto"

    $type: string;
    description: string;
    numberOfTransactions: number;
    userId: string;
    status: FinanceTransferHeapStatus;
    headStatus?: FinanceTransferHeapHeadStatus;
    jobStatus?: FinanceTransferHeapJobStatus;
    waitingForJobId?: string;
    transferred?: Date;
    fileStorageId?: string;
    headReceipt?: string;
    fileReceipt?: string;
    parameters?: FinanceSystemMetadata;
    areParametersResolved: boolean;
    isBeingCreated: boolean;

    constructor(data?: Partial<FinanceTransferHeapEditableFields>) {
        Object.assign(this, data);
    }
}
