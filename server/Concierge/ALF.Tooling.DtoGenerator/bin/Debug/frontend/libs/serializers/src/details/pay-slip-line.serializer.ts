import { Serializer } from "@alf/core/models";
import { PaySlipLine } from "@alf/models/details/pay-slip-line";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class PaySlipLineSerializer implements Serializer<PaySlipLine> {

    deserialize(data: undefined): undefined
    deserialize(data: any): PaySlipLine
    deserialize(data: any): PaySlipLine | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };

        return new PaySlipLine(copy);
    }

    serialize(entity: PaySlipLine | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: PaySlipLine, _forceTypeHint?: boolean): any
    serialize(entity: PaySlipLine | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? PaySlipLine.typeNameHint : undefined,
            description: entity.description,
            additionalInformation: entity.additionalInformation,
            slipLineText: entity.slipLineText,
            payCodeNumber: entity.payCodeNumber,
            attachmentReference: entity.attachmentReference,
            isPayable: entity.isPayable,
            quantity: entity.quantity,
            hours: entity.hours,
            rate: entity.rate,
            amount: entity.amount,
            yearToDateQuantity: entity.yearToDateQuantity,
            yearToDateHours: entity.yearToDateHours,
            yearToDateAmount: entity.yearToDateAmount,
            slipLineNumber: entity.slipLineNumber
        };
    }
}
