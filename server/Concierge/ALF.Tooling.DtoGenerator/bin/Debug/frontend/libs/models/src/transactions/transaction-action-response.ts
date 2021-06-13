
import { EmployeeId } from "../core/employee";
import { PayrollPeriodId } from "../periods/payroll-period";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class TransactionActionResponse {

    static $name = "TransactionActionResponse";
    static typeNameHint = "ALF.Shared.Dto.Models.Transactions.TransactionActionResponse, ALF.Shared.Dto"

    employeeId: EmployeeId;
    periodId: PayrollPeriodId;
    positionId?: string;
    jobId: string;

    constructor(data?: Partial<TransactionActionResponse>) {
        Object.assign(this, data);
    }
}
