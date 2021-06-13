
import { Disbursement } from "./disbursement";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class BottomLine {

    static $name = "BottomLine";
    static typeNameHint = "ALF.Shared.Dto.Models.Transactions.BottomLine, ALF.Shared.Dto"

    periodVacationPayBasis: number;
    periodTax: number;
    accumulatedVacationPayBasis: number;
    accumulatedTax: number;
    disbursements: Disbursement[] = [];

    constructor(data?: Partial<BottomLine>) {
        Object.assign(this, data);
    }
}
