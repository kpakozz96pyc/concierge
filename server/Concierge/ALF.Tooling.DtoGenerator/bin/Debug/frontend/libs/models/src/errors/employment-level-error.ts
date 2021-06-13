
import { EmploymentId } from "../core/employment";
import { EmployeeLevelError } from "@alf/models/errors/employee-level-error";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class EmploymentLevelError extends EmployeeLevelError {

    static $name = "EmploymentLevelError";
    static typeNameHint = "ALF.Shared.Dto.Models.Amelding.Errors.EmploymentLevelError, ALF.Shared.Dto"

    employmentId: EmploymentId;

    constructor(data?: Partial<EmploymentLevelError>) {
        super(data);
        Object.assign(this, data);
        this.$type = EmploymentLevelError.typeNameHint;
    }
}
