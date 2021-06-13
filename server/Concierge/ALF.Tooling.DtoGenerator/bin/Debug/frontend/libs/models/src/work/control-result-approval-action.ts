
import { WorkItemAction } from "@alf/models/work/work-item-action";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class ControlResultApprovalAction extends WorkItemAction {

    static $name = "ControlResultApprovalAction";
    static typeNameHint = "ALF.Shared.Dto.Models.Work.ControlResultApprovalAction, ALF.Shared.Dto"

    controlType?: string;
    controlDefinitionId?: string;
    controlDefinitionVersion: number;
    controlCompanyVersion: number;
    employeeNumber: number;
    controlResultIdentifier?: string;
    companyId?: string;
    periodNumber: number;

    constructor(data?: Partial<ControlResultApprovalAction>) {
        super(data);
        Object.assign(this, data);
        this.$type = ControlResultApprovalAction.typeNameHint;
    }
}
