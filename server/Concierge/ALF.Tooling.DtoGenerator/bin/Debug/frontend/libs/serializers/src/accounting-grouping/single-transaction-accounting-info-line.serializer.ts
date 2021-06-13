import { Serializer } from "@alf/core/models";
import { SingleTransactionAccountingInfoLine } from "@alf/models/accounting-grouping/single-transaction-accounting-info-line";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class SingleTransactionAccountingInfoLineSerializer implements Serializer<SingleTransactionAccountingInfoLine> {

    deserialize(data: undefined): undefined
    deserialize(data: any): SingleTransactionAccountingInfoLine
    deserialize(data: any): SingleTransactionAccountingInfoLine | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };

        return new SingleTransactionAccountingInfoLine(copy);
    }

    serialize(entity: SingleTransactionAccountingInfoLine | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: SingleTransactionAccountingInfoLine, _forceTypeHint?: boolean): any
    serialize(entity: SingleTransactionAccountingInfoLine | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: entity.$type,
            description: entity.description,
            accountingTransactionId: entity.accountingTransactionId,
            outputTransactionId: entity.outputTransactionId,
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
