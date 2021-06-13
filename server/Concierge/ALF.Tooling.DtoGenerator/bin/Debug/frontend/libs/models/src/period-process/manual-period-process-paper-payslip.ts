
import { ManualPeriodProcessPaperPayslipActions } from "./enums/manual-period-process-paper-payslip-actions";
import { ReportData } from "../reports/report-data";
import { ManualPeriodProcessPayslip } from "@alf/models/period-process/manual-period-process-payslip";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export type ManualPeriodProcessPaperPayslipId = string;

export class ManualPeriodProcessPaperPayslip extends ManualPeriodProcessPayslip {

    static $name = "ManualPeriodProcessPaperPayslip";
    static typeNameHint = "ALF.Shared.Dto.Models.Process.PeriodProcess.ManualPeriodProcessPaperPayslip, ALF.Shared.Dto"

    reportData?: ReportData;
    actions: ManualPeriodProcessPaperPayslipActions[] = [];

    constructor(data?: Partial<ManualPeriodProcessPaperPayslip>) {
        super(data);
        Object.assign(this, data);
        this.$type = ManualPeriodProcessPaperPayslip.typeNameHint;
    }
}
