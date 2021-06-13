

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class ControlResultApproval {

    static $name = "ControlResultApproval";
    static typeNameHint = "ALF.Shared.Dto.Models.Control.Result.ControlResultApproval, ALF.Shared.Dto"

    controlType?: string;
    controlDefinitionId?: string;
    controlDefinitionVersion: number;
    controlCompanyVersion: number;
    employeeNumber: number;
    controlResultIdentifier?: string;

    constructor(data?: Partial<ControlResultApproval>) {
        Object.assign(this, data);
    }
}
