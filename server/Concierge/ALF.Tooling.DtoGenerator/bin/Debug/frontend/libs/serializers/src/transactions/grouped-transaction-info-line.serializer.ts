import { NonGroupedTransactionInfoLineSerializer } from "./non-grouped-transaction-info-line.serializer";
import { serializeDate } from "@alf/core";
import { Serializer } from "@alf/core/models";
import { GroupedTransactionInfoLine } from "@alf/models/transactions/grouped-transaction-info-line";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class GroupedTransactionInfoLineSerializer implements Serializer<GroupedTransactionInfoLine> {

    deserialize(data: undefined): undefined
    deserialize(data: any): GroupedTransactionInfoLine
    deserialize(data: any): GroupedTransactionInfoLine | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        copy.infoLines = (copy.infoLines || []).map(new NonGroupedTransactionInfoLineSerializer().deserialize);

        if (copy.startDate !== undefined)
            copy.startDate = new Date(copy.startDate);

        if (copy.endDate !== undefined)
            copy.endDate = new Date(copy.endDate);

        return new GroupedTransactionInfoLine(copy);
    }

    serialize(entity: GroupedTransactionInfoLine | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: GroupedTransactionInfoLine, _forceTypeHint?: boolean): any
    serialize(entity: GroupedTransactionInfoLine | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: entity.$type,
            infoLines: entity.infoLines
                ? entity.infoLines.map(e => new NonGroupedTransactionInfoLineSerializer().serialize(e, _forceTypeHint))
                : undefined,
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
