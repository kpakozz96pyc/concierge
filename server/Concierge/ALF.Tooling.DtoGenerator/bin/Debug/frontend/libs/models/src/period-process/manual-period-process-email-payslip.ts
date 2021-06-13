
import { ManualPeriodProcessEmailPayslipActions } from "./enums/manual-period-process-email-payslip-actions";
import { ManualPeriodProcessPayslip } from "@alf/models/period-process/manual-period-process-payslip";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export type ManualPeriodProcessEmailPayslipId = string;

export class ManualPeriodProcessEmailPayslip extends ManualPeriodProcessPayslip {

    static $name = "ManualPeriodProcessEmailPayslip";
    static typeNameHint = "ALF.Shared.Dto.Models.Process.PeriodProcess.ManualPeriodProcessEmailPayslip, ALF.Shared.Dto"

    actions: ManualPeriodProcessEmailPayslipActions[] = [];

    constructor(data?: Partial<ManualPeriodProcessEmailPayslip>) {
        super(data);
        Object.assign(this, data);
        this.$type = ManualPeriodProcessEmailPayslip.typeNameHint;
    }
}
