

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export type SalaryRecalculationLogId = string;

export class SalaryRecalculationLog {

    static $name = "SalaryRecalculationLog";
    static typeNameHint = "ALF.Shared.Dto.Models.Logging.SalaryRecalculationLog, ALF.Shared.Dto"

    id: SalaryRecalculationLogId;
    code: number;
    companyId?: string;
    employeeNumber: number;
    fromDate?: Date;
    changedDate: Date;
    changedBy?: string;
    changeInfo?: string;
    handled: boolean;
    handledAt?: Date;
    handledBy?: string;

    constructor(data?: Partial<SalaryRecalculationLog>) {
        Object.assign(this, data);
    }
}
