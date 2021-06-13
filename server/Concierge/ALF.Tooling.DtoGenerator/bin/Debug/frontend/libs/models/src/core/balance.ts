
import { EmployeeId } from "./employee";
import { PayCodeId } from "./pay-code";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export type BalanceId = string;

export class Balance {

    static $name = "Balance";
    static typeNameHint = "ALF.Shared.Dto.Models.Core.Balance, ALF.Shared.Dto"

    id: BalanceId;
    companyId?: string;
    employeeId: EmployeeId;
    payCodeNumber: number;
    payCodeId: PayCodeId;
    balanceAmount?: number;
    interestRate?: number;
    interestAmount?: number;
    startBalance?: number;

    constructor(data?: Partial<Balance>) {
        Object.assign(this, data);
    }
}
