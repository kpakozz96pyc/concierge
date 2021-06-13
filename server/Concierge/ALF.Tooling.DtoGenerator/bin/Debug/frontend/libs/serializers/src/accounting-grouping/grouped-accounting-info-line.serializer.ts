import { SingleTransactionAccountingInfoLineSerializer } from "./single-transaction-accounting-info-line.serializer";
import { Serializer } from "@alf/core/models";
import { GroupedAccountingInfoLine } from "@alf/models/accounting-grouping/grouped-accounting-info-line";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class GroupedAccountingInfoLineSerializer implements Serializer<GroupedAccountingInfoLine> {

    deserialize(data: undefined): undefined
    deserialize(data: any): GroupedAccountingInfoLine
    deserialize(data: any): GroupedAccountingInfoLine | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        copy.transactions = (copy.transactions || []).map(new SingleTransactionAccountingInfoLineSerializer().deserialize);

        return new GroupedAccountingInfoLine(copy);
    }

    serialize(entity: GroupedAccountingInfoLine | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: GroupedAccountingInfoLine, _forceTypeHint?: boolean): any
    serialize(entity: GroupedAccountingInfoLine | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: entity.$type,
            transactions: entity.transactions
                ? entity.transactions.map(e => new SingleTransactionAccountingInfoLineSerializer().serialize(e, _forceTypeHint))
                : undefined,
            accountingRuleId: entity.accountingRuleId,
            autoAccountingType: entity.autoAccountingType,
            accountId: entity.accountId,
            activityId: entity.activityId,
            dimensionA: entity.dimensionA,
            dimensionB: entity.dimensionB,
            dimensionC: entity.dimensionC,
            dimensionD: entity.dimensionD,
            amount: entity.amount,
            payCodeId: entity.payCodeId,
            isPartOfSum: entity.isPartOfSum
        };
    }
}
