
import { ControlResultSeverity } from "./enums/control-result-severity";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class EmployeeControlResult {

    static $name = "EmployeeControlResult";
    static typeNameHint = "ALF.Shared.Dto.Models.Control.Result.EmployeeControlResult, ALF.Shared.Dto"

    displayMessage: string;
    severity: ControlResultSeverity;
    count: number;
    isApproved: boolean;
    approvedAt?: Date;
    approvedByUserId?: string;
    controlType?: string;
    controlDefinitionId?: string;
    controlDefinitionVersion: number;
    controlCompanyVersion: number;
    controlResultId: string;
    companyId?: string;
    periodNumber: number;
    employeeNumber: number;
    controlResultIdentifier?: string;

    constructor(data?: Partial<EmployeeControlResult>) {
        Object.assign(this, data);
    }
}
