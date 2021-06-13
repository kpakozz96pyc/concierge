
import { ProcessMilestoneStatusReasonDependent } from "@alf/models/process/process-milestone-status-reason-dependent";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class ProcessMilestoneStatusReasonSteps extends ProcessMilestoneStatusReasonDependent {

    static $name = "ProcessMilestoneStatusReasonSteps";
    static typeNameHint = "ALF.Shared.Dto.Models.Process.ProcessMilestoneStatusReasonSteps, ALF.Shared.Dto"

    stepIds: string[] = [];

    constructor(data?: Partial<ProcessMilestoneStatusReasonSteps>) {
        super(data);
        Object.assign(this, data);
        this.$type = ProcessMilestoneStatusReasonSteps.typeNameHint;
    }
}
