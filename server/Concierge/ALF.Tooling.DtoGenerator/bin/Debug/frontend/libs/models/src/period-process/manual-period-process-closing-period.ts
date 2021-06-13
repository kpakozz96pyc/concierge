
import { ManualPeriodProcessClosingPeriodActions } from "./enums/manual-period-process-closing-period-actions";
import { ManualPeriodProcess } from "@alf/models/period-process/manual-period-process";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export type ManualPeriodProcessClosingPeriodId = string;

export class ManualPeriodProcessClosingPeriod extends ManualPeriodProcess {

    static $name = "ManualPeriodProcessClosingPeriod";
    static typeNameHint = "ALF.Shared.Dto.Models.Process.PeriodProcess.ManualPeriodProcessClosingPeriod, ALF.Shared.Dto"

    actions: ManualPeriodProcessClosingPeriodActions[] = [];

    constructor(data?: Partial<ManualPeriodProcessClosingPeriod>) {
        super(data);
        Object.assign(this, data);
        this.$type = ManualPeriodProcessClosingPeriod.typeNameHint;
    }
}
