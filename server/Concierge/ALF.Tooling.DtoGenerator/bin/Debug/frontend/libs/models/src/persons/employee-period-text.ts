

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export type EmployeePeriodTextId = string;

export class EmployeePeriodText {

    static $name = "EmployeePeriodText";
    static typeNameHint = "ALF.Shared.Dto.Models.Persons.EmployeePeriodText, ALF.Shared.Dto"

    id: EmployeePeriodTextId;
    companyId: string;
    periodNumber: number;
    employeeNumber: number;
    text?: string;

    constructor(data?: Partial<EmployeePeriodText>) {
        Object.assign(this, data);
    }
}
