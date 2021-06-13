
import { ProcessMilestoneStatusReasonDependent } from "@alf/models/process/process-milestone-status-reason-dependent";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class ProcessMilestoneStatusReasonPeriodState extends ProcessMilestoneStatusReasonDependent {

    static $name = "ProcessMilestoneStatusReasonPeriodState";
    static typeNameHint = "ALF.Shared.Dto.Models.Process.ProcessMilestoneStatusReasonPeriodState, ALF.Shared.Dto"

    periodState?: string;

    constructor(data?: Partial<ProcessMilestoneStatusReasonPeriodState>) {
        super(data);
        Object.assign(this, data);
        this.$type = ProcessMilestoneStatusReasonPeriodState.typeNameHint;
    }
}
