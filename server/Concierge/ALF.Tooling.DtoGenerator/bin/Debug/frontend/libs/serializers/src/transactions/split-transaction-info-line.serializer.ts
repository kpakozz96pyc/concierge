import { SingleTransactionInfoLineSerializer } from "./single-transaction-info-line.serializer";
import { serializeDate } from "@alf/core";
import { Serializer } from "@alf/core/models";
import { SplitTransactionInfoLine } from "@alf/models/transactions/split-transaction-info-line";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class SplitTransactionInfoLineSerializer implements Serializer<SplitTransactionInfoLine> {

    deserialize(data: undefined): undefined
    deserialize(data: any): SplitTransactionInfoLine
    deserialize(data: any): SplitTransactionInfoLine | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        copy.splitInto = (copy.splitInto || []).map(new SingleTransactionInfoLineSerializer().deserialize);

        if (copy.startDate !== undefined)
            copy.startDate = new Date(copy.startDate);

        if (copy.endDate !== undefined)
            copy.endDate = new Date(copy.endDate);

        return new SplitTransactionInfoLine(copy);
    }

    serialize(entity: SplitTransactionInfoLine | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: SplitTransactionInfoLine, _forceTypeHint?: boolean): any
    serialize(entity: SplitTransactionInfoLine | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: entity.$type,
            splitInto: entity.splitInto
                ? entity.splitInto.map(e => new SingleTransactionInfoLineSerializer().serialize(e, _forceTypeHint))
                : undefined,
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
