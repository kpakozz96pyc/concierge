

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class EmployeeSearchInformationFilter {

    static $name = "EmployeeSearchInformationFilter";
    static typeNameHint = "ALF.Shared.Dto.Models.Core.EmployeeSearchInformationFilter, ALF.Shared.Dto"

    includePastEmployees: boolean;
    crossCompanySearch: boolean;
    search?: string;

    constructor(data?: Partial<EmployeeSearchInformationFilter>) {
        Object.assign(this, data);
    }
}
