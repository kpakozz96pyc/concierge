
import { ControlResultApproval } from "./control-result-approval";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class ControlResultApprovals {

    static $name = "ControlResultApprovals";
    static typeNameHint = "ALF.Shared.Dto.Models.Control.Result.ControlResultApprovals, ALF.Shared.Dto"

    companyId?: string;
    periodNumber?: number;
    approvals: ControlResultApproval[] = [];

    constructor(data?: Partial<ControlResultApprovals>) {
        Object.assign(this, data);
    }
}
