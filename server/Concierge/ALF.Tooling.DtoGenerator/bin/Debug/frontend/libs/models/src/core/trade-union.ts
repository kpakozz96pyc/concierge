
import { DeductionOwnerPaymentType } from "./enums/deduction-owner-payment-type";
import { DeductionOwnerKidModulusType } from "./enums/deduction-owner-kid-modulus-type";
import { DeductionOwnerReportingFrequencyType } from "./enums/deduction-owner-reporting-frequency-type";
import { DeductionOwnerKIDNumber } from "./deduction-owner-kidnumber";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export type TradeUnionId = string;

export class TradeUnion {

    static $name = "TradeUnion";
    static typeNameHint = "ALF.Shared.Dto.Models.Core.TradeUnion, ALF.Shared.Dto"

    id: TradeUnionId;
    companyId: string;
    code: number;
    name?: string;
    address?: string;
    countryCode?: string;
    postalCode?: string;
    paymentMethod?: DeductionOwnerPaymentType;
    accountNumber?: string;
    liquidityAccountNumber?: string;
    paymentAccumulationMethod: number;
    showMessageForReceiver?: boolean;
    kidModulus?: DeductionOwnerKidModulusType;
    kid?: string;
    provisionAccountingCode?: string;
    chargeAccountingCode?: string;
    reportingFrequency?: DeductionOwnerReportingFrequencyType;
    ssnPrintingMethod: number;
    dimensionAPrintingMethod: number;
    spekterTradeUnionNumber?: string;
    emailAddress?: string;
    sendReportViaEmail?: boolean;
    lowerDeductionLimit?: number;
    upperDeductionLimit?: number;
    payCode?: number;
    deductionPercent?: number;
    deductionAmount?: number;
    taxationCode?: number;
    ouFond1PayCode?: number;
    ouFond1DeductionAmount?: number;
    ouFond2PayCode?: number;
    ouFond2DeductionAmount?: number;
    insurancePayCode?: number;
    insuranceDeductionAmount?: number;
    deductionOwnerKIDNumbers: DeductionOwnerKIDNumber[] = [];

    constructor(data?: Partial<TradeUnion>) {
        Object.assign(this, data);
    }
}
