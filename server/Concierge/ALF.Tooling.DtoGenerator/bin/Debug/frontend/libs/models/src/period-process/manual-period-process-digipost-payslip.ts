
import { ManualPeriodProcessDigipostPayslipActions } from "./enums/manual-period-process-digipost-payslip-actions";
import { ManualPeriodProcessPayslip } from "@alf/models/period-process/manual-period-process-payslip";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export type ManualPeriodProcessDigipostPayslipId = string;

export class ManualPeriodProcessDigipostPayslip extends ManualPeriodProcessPayslip {

    static $name = "ManualPeriodProcessDigipostPayslip";
    static typeNameHint = "ALF.Shared.Dto.Models.Process.PeriodProcess.ManualPeriodProcessDigipostPayslip, ALF.Shared.Dto"

    actions: ManualPeriodProcessDigipostPayslipActions[] = [];

    constructor(data?: Partial<ManualPeriodProcessDigipostPayslip>) {
        super(data);
        Object.assign(this, data);
        this.$type = ManualPeriodProcessDigipostPayslip.typeNameHint;
    }
}
