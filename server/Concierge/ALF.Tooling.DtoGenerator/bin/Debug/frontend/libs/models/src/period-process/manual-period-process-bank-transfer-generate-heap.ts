
import { ManualPeriodProcessBankTransferGenerateHeapActions } from "./enums/manual-period-process-bank-transfer-generate-heap-actions";
import { ReportData } from "../reports/report-data";
import { ManualPeriodProcess } from "@alf/models/period-process/manual-period-process";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export type ManualPeriodProcessBankTransferGenerateHeapId = string;

export class ManualPeriodProcessBankTransferGenerateHeap extends ManualPeriodProcess {

    static $name = "ManualPeriodProcessBankTransferGenerateHeap";
    static typeNameHint = "ALF.Shared.Dto.Models.Process.PeriodProcess.ManualPeriodProcessBankTransferGenerateHeap, ALF.Shared.Dto"

    heapId?: string;
    reportData?: ReportData;
    actions: ManualPeriodProcessBankTransferGenerateHeapActions[] = [];

    constructor(data?: Partial<ManualPeriodProcessBankTransferGenerateHeap>) {
        super(data);
        Object.assign(this, data);
        this.$type = ManualPeriodProcessBankTransferGenerateHeap.typeNameHint;
    }
}
