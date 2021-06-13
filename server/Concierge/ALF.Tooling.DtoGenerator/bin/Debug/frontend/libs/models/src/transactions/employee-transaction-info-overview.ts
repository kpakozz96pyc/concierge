
import { TransactionInfoGroup } from "./transaction-info-group";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class EmployeeTransactionInfoOverview {

    static $name = "EmployeeTransactionInfoOverview";
    static typeNameHint = "ALF.Shared.Dto.Models.Transactions.EmployeeTransactionInfoOverview, ALF.Shared.Dto"

    id?: string;
    employeeId?: string;
    employeeNumber: number;
    employeePeriodTextId: string;
    groupByEmployments: boolean;
    isPeriodRange: boolean;
    singlePeriodId?: string;
    periodRangeFrom?: string;
    periodRangeUntil?: string;
    netPayment: number;
    paymentDate: Date;
    transactionInfoGroups: TransactionInfoGroup[] = [];

    constructor(data?: Partial<EmployeeTransactionInfoOverview>) {
        Object.assign(this, data);
    }
}
