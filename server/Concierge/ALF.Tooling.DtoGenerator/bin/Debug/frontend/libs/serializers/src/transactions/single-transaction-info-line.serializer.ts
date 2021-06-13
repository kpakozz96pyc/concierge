import { serializeDate } from "@alf/core";
import { Serializer } from "@alf/core/models";
import { SingleTransactionInfoLine } from "@alf/models/transactions/single-transaction-info-line";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class SingleTransactionInfoLineSerializer implements Serializer<SingleTransactionInfoLine> {

    deserialize(data: undefined): undefined
    deserialize(data: any): SingleTransactionInfoLine
    deserialize(data: any): SingleTransactionInfoLine | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        if (copy.startDate !== undefined)
            copy.startDate = new Date(copy.startDate);

        if (copy.endDate !== undefined)
            copy.endDate = new Date(copy.endDate);

        return new SingleTransactionInfoLine(copy);
    }

    serialize(entity: SingleTransactionInfoLine | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: SingleTransactionInfoLine, _forceTypeHint?: boolean): any
    serialize(entity: SingleTransactionInfoLine | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: entity.$type,
            sourceType: entity.sourceType,
            sourceTranscationId: entity.sourceTranscationId,
            sourceInputTransactionType: entity.sourceInputTransactionType,
            referencedInputTransactionId: entity.referencedInputTransactionId,
            referencedInputTransactionType: entity.referencedInputTransactionType,
            periodId: entity.periodId,
            payCodeNumber: entity.payCodeNumber,
            source: entity.source,
            description: entity.description,
            quantity: entity.quantity,
            hours: entity.hours,
            rate: entity.rate,
            amount: entity.amount,
            isPayable: entity.isPayable,
            isQuantityPartOfSum: entity.isQuantityPartOfSum,
            isHoursPartOfSum: entity.isHoursPartOfSum,
            isAmountPartOfSum: entity.isAmountPartOfSum,
            yearToDateQuantity: entity.yearToDateQuantity,
            yearToDateHours: entity.yearToDateHours,
            yearToDateAmount: entity.yearToDateAmount,
            startDate: serializeDate(entity.startDate),
            endDate: serializeDate(entity.endDate)
        };
    }
}
