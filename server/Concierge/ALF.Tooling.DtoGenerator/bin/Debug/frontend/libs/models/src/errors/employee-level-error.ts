
import { CompanyId } from "../core/company";
import { EmployeeId } from "../core/employee";
import { RootLevelError } from "@alf/models/errors/root-level-error";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class EmployeeLevelError extends RootLevelError {

    static $name = "EmployeeLevelError";
    static typeNameHint = "ALF.Shared.Dto.Models.Amelding.Errors.EmployeeLevelError, ALF.Shared.Dto"

    companyId: CompanyId;
    employeeId: EmployeeId;

    constructor(data?: Partial<EmployeeLevelError>) {
        super(data);
        Object.assign(this, data);
        this.$type = EmployeeLevelError.typeNameHint;
    }
}
