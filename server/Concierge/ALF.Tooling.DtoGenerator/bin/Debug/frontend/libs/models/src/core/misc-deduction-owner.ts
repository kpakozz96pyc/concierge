
import { MiscDeductionOwnerType } from "./enums/misc-deduction-owner-type";
import { DeductionOwnerPaymentType } from "./enums/deduction-owner-payment-type";
import { DeductionOwnerKidModulusType } from "./enums/deduction-owner-kid-modulus-type";
import { DeductionOwnerReportingFrequencyType } from "./enums/deduction-owner-reporting-frequency-type";
import { DeductionOwnerKIDNumber } from "./deduction-owner-kidnumber";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export type MiscDeductionOwnerId = string;

export class MiscDeductionOwner {

    static $name = "MiscDeductionOwner";
    static typeNameHint = "ALF.Shared.Dto.Models.Core.MiscDeductionOwner, ALF.Shared.Dto"

    id: MiscDeductionOwnerId;
    companyId: string;
    code: number;
    name?: string;
    address?: string;
    countryCode?: string;
    postalCode?: string;
    deductionType?: MiscDeductionOwnerType;
    paymentMethod?: DeductionOwnerPaymentType;
    accountNumber?: string;
    liquidityAccountNumber?: string;
    paymentAccumulationMethod: number;
    showMessageForReceiver: boolean;
    kidModulus?: DeductionOwnerKidModulusType;
    kid?: string;
    provisionAccountingCode?: string;
    chargeAccountingCode?: string;
    reportingFrequency?: DeductionOwnerReportingFrequencyType;
    ssnPrintingMethod: number;
    dimensionAPrintingMethod: number;
    emailAddress?: string;
    sendReportViaEmail: boolean;
    taxationCode?: number;
    deductionOwnerKIDNumbers: DeductionOwnerKIDNumber[] = [];

    constructor(data?: Partial<MiscDeductionOwner>) {
        Object.assign(this, data);
    }
}
