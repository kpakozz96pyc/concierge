
import { ProcessMilestoneStatusReason } from "@alf/models/process/process-milestone-status-reason";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class ProcessMilestoneStatusReasonManual extends ProcessMilestoneStatusReason {

    static $name = "ProcessMilestoneStatusReasonManual";
    static typeNameHint = "ALF.Shared.Dto.Models.Process.ProcessMilestoneStatusReasonManual, ALF.Shared.Dto"

    deadline: Date;

    constructor(data?: Partial<ProcessMilestoneStatusReasonManual>) {
        super(data);
        Object.assign(this, data);
        this.$type = ProcessMilestoneStatusReasonManual.typeNameHint;
    }
}
