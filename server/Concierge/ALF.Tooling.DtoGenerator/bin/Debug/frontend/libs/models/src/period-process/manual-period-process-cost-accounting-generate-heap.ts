
import { ManualPeriodProcessCostAccountingGenerateHeapActions } from "./enums/manual-period-process-cost-accounting-generate-heap-actions";
import { ReportData } from "../reports/report-data";
import { ManualPeriodProcess } from "@alf/models/period-process/manual-period-process";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export type ManualPeriodProcessCostAccountingGenerateHeapId = string;

export class ManualPeriodProcessCostAccountingGenerateHeap extends ManualPeriodProcess {

    static $name = "ManualPeriodProcessCostAccountingGenerateHeap";
    static typeNameHint = "ALF.Shared.Dto.Models.Process.PeriodProcess.ManualPeriodProcessCostAccountingGenerateHeap, ALF.Shared.Dto"

    heapId?: string;
    reportId: string;
    reportData?: ReportData;
    actions: ManualPeriodProcessCostAccountingGenerateHeapActions[] = [];

    constructor(data?: Partial<ManualPeriodProcessCostAccountingGenerateHeap>) {
        super(data);
        Object.assign(this, data);
        this.$type = ManualPeriodProcessCostAccountingGenerateHeap.typeNameHint;
    }
}
