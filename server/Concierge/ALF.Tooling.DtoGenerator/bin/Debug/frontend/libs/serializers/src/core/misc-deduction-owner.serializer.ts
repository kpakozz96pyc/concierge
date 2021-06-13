import { MiscDeductionOwnerType } from "@alf/models/core/enums/misc-deduction-owner-type";
import { DeductionOwnerPaymentType } from "@alf/models/core/enums/deduction-owner-payment-type";
import { DeductionOwnerKidModulusType } from "@alf/models/core/enums/deduction-owner-kid-modulus-type";
import { DeductionOwnerReportingFrequencyType } from "@alf/models/core/enums/deduction-owner-reporting-frequency-type";
import { DeductionOwnerKIDNumberSerializer } from "./deduction-owner-kidnumber.serializer";
import { Serializer } from "@alf/core/models";
import { MiscDeductionOwner } from "@alf/models/core/misc-deduction-owner";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class MiscDeductionOwnerSerializer implements Serializer<MiscDeductionOwner> {

    deserialize(data: undefined): undefined
    deserialize(data: any): MiscDeductionOwner
    deserialize(data: any): MiscDeductionOwner | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        if (copy.deductionType !== undefined)
            copy.deductionType = MiscDeductionOwnerType[copy.deductionType];

        if (copy.paymentMethod !== undefined)
            copy.paymentMethod = DeductionOwnerPaymentType[copy.paymentMethod];

        if (copy.kidModulus !== undefined)
            copy.kidModulus = DeductionOwnerKidModulusType[copy.kidModulus];

        if (copy.reportingFrequency !== undefined)
            copy.reportingFrequency = DeductionOwnerReportingFrequencyType[copy.reportingFrequency];

        copy.deductionOwnerKIDNumbers = (copy.deductionOwnerKIDNumbers || []).map(new DeductionOwnerKIDNumberSerializer().deserialize);

        return new MiscDeductionOwner(copy);
    }

    serialize(entity: MiscDeductionOwner | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: MiscDeductionOwner, _forceTypeHint?: boolean): any
    serialize(entity: MiscDeductionOwner | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? MiscDeductionOwner.typeNameHint : undefined,
            id: entity.id,
            companyId: entity.companyId,
            code: entity.code,
            name: entity.name,
            address: entity.address,
            countryCode: entity.countryCode,
            postalCode: entity.postalCode,
            deductionType: entity.deductionType !== null && entity.deductionType !== undefined
                ? MiscDeductionOwnerType[entity.deductionType]
                : undefined,
            paymentMethod: entity.paymentMethod !== null && entity.paymentMethod !== undefined
                ? DeductionOwnerPaymentType[entity.paymentMethod]
                : undefined,
            accountNumber: entity.accountNumber,
            liquidityAccountNumber: entity.liquidityAccountNumber,
            paymentAccumulationMethod: entity.paymentAccumulationMethod,
            showMessageForReceiver: entity.showMessageForReceiver,
            kidModulus: entity.kidModulus !== null && entity.kidModulus !== undefined
                ? DeductionOwnerKidModulusType[entity.kidModulus]
                : undefined,
            kid: entity.kid,
            provisionAccountingCode: entity.provisionAccountingCode,
            chargeAccountingCode: entity.chargeAccountingCode,
            reportingFrequency: entity.reportingFrequency !== null && entity.reportingFrequency !== undefined
                ? DeductionOwnerReportingFrequencyType[entity.reportingFrequency]
                : undefined,
            ssnPrintingMethod: entity.ssnPrintingMethod,
            dimensionAPrintingMethod: entity.dimensionAPrintingMethod,
            emailAddress: entity.emailAddress,
            sendReportViaEmail: entity.sendReportViaEmail,
            taxationCode: entity.taxationCode,
            deductionOwnerKIDNumbers: entity.deductionOwnerKIDNumbers
                ? entity.deductionOwnerKIDNumbers.map(e => new DeductionOwnerKIDNumberSerializer().serialize(e, _forceTypeHint))
                : undefined
        };
    }
}
