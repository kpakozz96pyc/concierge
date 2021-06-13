
import { ManualPeriodProcessSalaryCalculationActions } from "./enums/manual-period-process-salary-calculation-actions";
import { ManualPeriodProcess } from "@alf/models/period-process/manual-period-process";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export type ManualPeriodProcessSalaryCalculationId = string;

export class ManualPeriodProcessSalaryCalculation extends ManualPeriodProcess {

    static $name = "ManualPeriodProcessSalaryCalculation";
    static typeNameHint = "ALF.Shared.Dto.Models.Process.PeriodProcess.ManualPeriodProcessSalaryCalculation, ALF.Shared.Dto"

    actions: ManualPeriodProcessSalaryCalculationActions[] = [];

    constructor(data?: Partial<ManualPeriodProcessSalaryCalculation>) {
        super(data);
        Object.assign(this, data);
        this.$type = ManualPeriodProcessSalaryCalculation.typeNameHint;
    }
}
