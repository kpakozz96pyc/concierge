
import { PaymentCycle } from "./enums/payment-cycle";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class PaymentCycleFields {

    static $name = "PaymentCycleFields";
    static typeNameHint = "ALF.Shared.Dto.Models.Periods.PaymentCycleFields, ALF.Shared.Dto"

    paymentCycle?: PaymentCycle;
    fromDate?: Date;
    toDate?: Date;
    deviantTable?: number;

    constructor(data?: Partial<PaymentCycleFields>) {
        Object.assign(this, data);
    }
}
