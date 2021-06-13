
import { EmploymentId } from "./employment";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export type EmployeeEmploymentId = string;

export class EmployeeEmployment {

    static $name = "EmployeeEmployment";
    static typeNameHint = "ALF.Shared.Dto.Models.Core.EmployeeEmployment, ALF.Shared.Dto"

    id: EmployeeEmploymentId;
    employeeNumber: number;
    referenceEmploymentId: EmploymentId;

    constructor(data?: Partial<EmployeeEmployment>) {
        Object.assign(this, data);
    }
}
