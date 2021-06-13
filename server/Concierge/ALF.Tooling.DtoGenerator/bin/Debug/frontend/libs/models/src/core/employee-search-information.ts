
import { AvailableValue } from "../available-value/available-value";
import { CompanyId } from "./company";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export type EmployeeSearchInformationId = string;

export class EmployeeSearchInformation {

    static $name = "EmployeeSearchInformation";
    static typeNameHint = "ALF.Shared.Dto.Models.Core.EmployeeSearchInformation, ALF.Shared.Dto"

    id: EmployeeSearchInformationId;
    companyId: CompanyId;
    employeeNumber: number;
    name?: string;
    image?: string;
    externalId?: string;
    dateOfBirth?: Date;
    referenceEmployment?: AvailableValue;

    constructor(data?: Partial<EmployeeSearchInformation>) {
        Object.assign(this, data);
    }
}
