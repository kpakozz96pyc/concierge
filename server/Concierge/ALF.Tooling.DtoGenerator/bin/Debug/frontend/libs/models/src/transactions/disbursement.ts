
import { PayoutType } from "./enums/payout-type";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class Disbursement {

    static $name = "Disbursement";
    static typeNameHint = "ALF.Shared.Dto.Models.Transactions.Disbursement, ALF.Shared.Dto"

    companyId: string;
    periodNumber: number;
    employeeNumber: number;
    payoutType: PayoutType;
    account?: string;
    swift?: string;
    payout: number;

    constructor(data?: Partial<Disbursement>) {
        Object.assign(this, data);
    }
}
