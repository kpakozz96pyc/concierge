
import { ProcessMilestoneStatusReasonManual } from "@alf/models/process/process-milestone-status-reason-manual";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class ProcessMilestoneStatusReasonControlResults extends ProcessMilestoneStatusReasonManual {

    static $name = "ProcessMilestoneStatusReasonControlResults";
    static typeNameHint = "ALF.Shared.Dto.Models.Process.ProcessMilestoneStatusReasonControlResults, ALF.Shared.Dto"



    constructor(data?: Partial<ProcessMilestoneStatusReasonControlResults>) {
        super(data);
        Object.assign(this, data);
        this.$type = ProcessMilestoneStatusReasonControlResults.typeNameHint;
    }
}
