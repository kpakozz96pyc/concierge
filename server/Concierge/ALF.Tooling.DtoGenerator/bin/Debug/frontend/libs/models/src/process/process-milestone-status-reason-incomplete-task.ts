
import { ProcessMilestoneStatusReasonManual } from "@alf/models/process/process-milestone-status-reason-manual";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class ProcessMilestoneStatusReasonIncompleteTask extends ProcessMilestoneStatusReasonManual {

    static $name = "ProcessMilestoneStatusReasonIncompleteTask";
    static typeNameHint = "ALF.Shared.Dto.Models.Process.ProcessMilestoneStatusReasonIncompleteTask, ALF.Shared.Dto"



    constructor(data?: Partial<ProcessMilestoneStatusReasonIncompleteTask>) {
        super(data);
        Object.assign(this, data);
        this.$type = ProcessMilestoneStatusReasonIncompleteTask.typeNameHint;
    }
}
