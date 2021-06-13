
import { ManualPeriodProcessPeriodCompletionActions } from "./enums/manual-period-process-period-completion-actions";
import { ManualPeriodProcess } from "@alf/models/period-process/manual-period-process";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export type ManualPeriodProcessPeriodCompletionId = string;

export class ManualPeriodProcessPeriodCompletion extends ManualPeriodProcess {

    static $name = "ManualPeriodProcessPeriodCompletion";
    static typeNameHint = "ALF.Shared.Dto.Models.Process.PeriodProcess.ManualPeriodProcessPeriodCompletion, ALF.Shared.Dto"

    actions: ManualPeriodProcessPeriodCompletionActions[] = [];

    constructor(data?: Partial<ManualPeriodProcessPeriodCompletion>) {
        super(data);
        Object.assign(this, data);
        this.$type = ManualPeriodProcessPeriodCompletion.typeNameHint;
    }
}
