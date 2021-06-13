
import { ManualPeriodProcess } from "@alf/models/period-process/manual-period-process";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export type ManualPeriodProcessPayslipId = string;

export class ManualPeriodProcessPayslip extends ManualPeriodProcess {

    static $name = "ManualPeriodProcessPayslip";
    static typeNameHint = "ALF.Shared.Dto.Models.Process.PeriodProcess.ManualPeriodProcessPayslip, ALF.Shared.Dto"



    constructor(data?: Partial<ManualPeriodProcessPayslip>) {
        super(data);
        Object.assign(this, data);
        this.$type = ManualPeriodProcessPayslip.typeNameHint;
    }
}
