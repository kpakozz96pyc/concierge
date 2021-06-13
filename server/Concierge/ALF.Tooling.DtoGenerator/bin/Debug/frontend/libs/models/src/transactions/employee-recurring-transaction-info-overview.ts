
import { TransactionInfoGroup } from "./transaction-info-group";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class EmployeeRecurringTransactionInfoOverview {

    static $name = "EmployeeRecurringTransactionInfoOverview";
    static typeNameHint = "ALF.Shared.Dto.Models.Transactions.EmployeeRecurringTransactionInfoOverview, ALF.Shared.Dto"

    id?: string;
    employeeId?: string;
    showAll: boolean;
    fromDate?: Date;
    transactionInfoGroups: TransactionInfoGroup[] = [];

    constructor(data?: Partial<EmployeeRecurringTransactionInfoOverview>) {
        Object.assign(this, data);
    }
}
