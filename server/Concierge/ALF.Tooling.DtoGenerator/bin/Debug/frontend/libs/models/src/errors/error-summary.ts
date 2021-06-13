
import { AmeldingFeedbackErrorIgnoringMonth } from "../amelding/amelding-feedback-error-ignoring-month";
import { RootLevelError } from "./root-level-error";
import { EmployeeWithErrors } from "./employee-with-errors";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class ErrorSummary {

    static $name = "ErrorSummary";
    static typeNameHint = "ALF.Shared.Dto.Models.Amelding.Errors.ErrorSummary, ALF.Shared.Dto"

    rootLevelErrors: RootLevelError[] = [];
    employeesWithErrors: EmployeeWithErrors[] = [];
    ameldingFeedbackErrorIgnoringMonth?: AmeldingFeedbackErrorIgnoringMonth;

    constructor(data?: Partial<ErrorSummary>) {
        Object.assign(this, data);
    }
}
