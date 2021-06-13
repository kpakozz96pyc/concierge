
import { PeriodStatus } from "../periods/enums/period-status";
import { ProcessMilestoneStatusReasonDependent } from "@alf/models/process/process-milestone-status-reason-dependent";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class ProcessMilestoneStatusReasonPeriodStatus extends ProcessMilestoneStatusReasonDependent {

    static $name = "ProcessMilestoneStatusReasonPeriodStatus";
    static typeNameHint = "ALF.Shared.Dto.Models.Process.ProcessMilestoneStatusReasonPeriodStatus, ALF.Shared.Dto"

    periodStatus: PeriodStatus;

    constructor(data?: Partial<ProcessMilestoneStatusReasonPeriodStatus>) {
        super(data);
        Object.assign(this, data);
        this.$type = ProcessMilestoneStatusReasonPeriodStatus.typeNameHint;
    }
}
