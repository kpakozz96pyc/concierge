
import { TransactionInfoGroup } from "./transaction-info-group";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class PositionTransactionInfoOverview {

    static $name = "PositionTransactionInfoOverview";
    static typeNameHint = "ALF.Shared.Dto.Models.Transactions.PositionTransactionInfoOverview, ALF.Shared.Dto"

    id?: string;
    positionId?: string;
    transactionInfoGroup?: TransactionInfoGroup;

    constructor(data?: Partial<PositionTransactionInfoOverview>) {
        Object.assign(this, data);
    }
}
