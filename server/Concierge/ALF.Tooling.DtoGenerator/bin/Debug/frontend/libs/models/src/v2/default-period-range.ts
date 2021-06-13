
import { EmployeeId } from "../core/employee";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export type DefaultPeriodRangeId = string;

export class DefaultPeriodRange {

    static $name = "DefaultPeriodRange";
    static typeNameHint = "ALF.Shared.Dto.Models.Transactions.V2.DefaultPeriodRange, ALF.Shared.Dto"

    id: DefaultPeriodRangeId;
    employeeId: EmployeeId;
    fromPeriodNumber?: number;
    toPeriodNumber?: number;

    constructor(data?: Partial<DefaultPeriodRange>) {
        Object.assign(this, data);
    }
}
