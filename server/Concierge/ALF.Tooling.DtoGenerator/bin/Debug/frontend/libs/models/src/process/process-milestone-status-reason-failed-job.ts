
import { ProcessMilestoneStatusReasonManual } from "@alf/models/process/process-milestone-status-reason-manual";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class ProcessMilestoneStatusReasonFailedJob extends ProcessMilestoneStatusReasonManual {

    static $name = "ProcessMilestoneStatusReasonFailedJob";
    static typeNameHint = "ALF.Shared.Dto.Models.Process.ProcessMilestoneStatusReasonFailedJob, ALF.Shared.Dto"



    constructor(data?: Partial<ProcessMilestoneStatusReasonFailedJob>) {
        super(data);
        Object.assign(this, data);
        this.$type = ProcessMilestoneStatusReasonFailedJob.typeNameHint;
    }
}
