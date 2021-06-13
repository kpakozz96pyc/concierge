
import { PaymentCycle } from "../periods/enums/payment-cycle";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class PeriodPlanExtendedInformation {

    static $name = "PeriodPlanExtendedInformation";
    static typeNameHint = "ALF.Shared.Dto.Models.AvailableValue.ExtendedInformation.PeriodPlanExtendedInformation, ALF.Shared.Dto"

    periodType?: string;
    periodNumberFormula?: string;
    payDateFormula?: string;
    actualPaymentDateFormula?: string;
    isActive: boolean;
    paymentCycle: PaymentCycle;

    constructor(data?: Partial<PeriodPlanExtendedInformation>) {
        Object.assign(this, data);
    }
}
