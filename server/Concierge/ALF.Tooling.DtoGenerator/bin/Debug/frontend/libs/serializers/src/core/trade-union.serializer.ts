import { DeductionOwnerPaymentType } from "@alf/models/core/enums/deduction-owner-payment-type";
import { DeductionOwnerKidModulusType } from "@alf/models/core/enums/deduction-owner-kid-modulus-type";
import { DeductionOwnerReportingFrequencyType } from "@alf/models/core/enums/deduction-owner-reporting-frequency-type";
import { DeductionOwnerKIDNumberSerializer } from "./deduction-owner-kidnumber.serializer";
import { Serializer } from "@alf/core/models";
import { TradeUnion } from "@alf/models/core/trade-union";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class TradeUnionSerializer implements Serializer<TradeUnion> {

    deserialize(data: undefined): undefined
    deserialize(data: any): TradeUnion
    deserialize(data: any): TradeUnion | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        if (copy.paymentMethod !== undefined)
            copy.paymentMethod = DeductionOwnerPaymentType[copy.paymentMethod];

        if (copy.kidModulus !== undefined)
            copy.kidModulus = DeductionOwnerKidModulusType[copy.kidModulus];

        if (copy.reportingFrequency !== undefined)
            copy.reportingFrequency = DeductionOwnerReportingFrequencyType[copy.reportingFrequency];

        copy.deductionOwnerKIDNumbers = (copy.deductionOwnerKIDNumbers || []).map(new DeductionOwnerKIDNumberSerializer().deserialize);

        return new TradeUnion(copy);
    }

    serialize(entity: TradeUnion | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: TradeUnion, _forceTypeHint?: boolean): any
    serialize(entity: TradeUnion | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? TradeUnion.typeNameHint : undefined,
            id: entity.id,
            companyId: entity.companyId,
            code: entity.code,
            name: entity.name,
            address: entity.address,
            countryCode: entity.countryCode,
            postalCode: entity.postalCode,
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
            spekterTradeUnionNumber: entity.spekterTradeUnionNumber,
            emailAddress: entity.emailAddress,
            sendReportViaEmail: entity.sendReportViaEmail,
            lowerDeductionLimit: entity.lowerDeductionLimit,
            upperDeductionLimit: entity.upperDeductionLimit,
            payCode: entity.payCode,
            deductionPercent: entity.deductionPercent,
            deductionAmount: entity.deductionAmount,
            taxationCode: entity.taxationCode,
            ouFond1PayCode: entity.ouFond1PayCode,
            ouFond1DeductionAmount: entity.ouFond1DeductionAmount,
            ouFond2PayCode: entity.ouFond2PayCode,
            ouFond2DeductionAmount: entity.ouFond2DeductionAmount,
            insurancePayCode: entity.insurancePayCode,
            insuranceDeductionAmount: entity.insuranceDeductionAmount,
            deductionOwnerKIDNumbers: entity.deductionOwnerKIDNumbers
                ? entity.deductionOwnerKIDNumbers.map(e => new DeductionOwnerKIDNumberSerializer().serialize(e, _forceTypeHint))
                : undefined
        };
    }
}
