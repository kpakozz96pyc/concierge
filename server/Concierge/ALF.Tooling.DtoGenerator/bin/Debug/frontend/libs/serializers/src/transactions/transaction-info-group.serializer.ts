import { TransactionInfoLineSerializer } from "./transaction-info-line.serializer";
import { Serializer } from "@alf/core/models";
import { TransactionInfoGroup } from "@alf/models/transactions/transaction-info-group";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class TransactionInfoGroupSerializer implements Serializer<TransactionInfoGroup> {

    deserialize(data: undefined): undefined
    deserialize(data: any): TransactionInfoGroup
    deserialize(data: any): TransactionInfoGroup | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        copy.payingTransactionInfoLines = (copy.payingTransactionInfoLines || []).map(new TransactionInfoLineSerializer().deserialize);

        copy.deductionTransactionInfoLines = (copy.deductionTransactionInfoLines || []).map(new TransactionInfoLineSerializer().deserialize);

        return new TransactionInfoGroup(copy);
    }

    serialize(entity: TransactionInfoGroup | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: TransactionInfoGroup, _forceTypeHint?: boolean): any
    serialize(entity: TransactionInfoGroup | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? TransactionInfoGroup.typeNameHint : undefined,
            title: entity.title,
            subTitle: entity.subTitle,
            hiredDate: entity.hiredDate,
            terminatedDate: entity.terminatedDate,
            payingTransactionInfoLines: entity.payingTransactionInfoLines
                ? entity.payingTransactionInfoLines.map(e => new TransactionInfoLineSerializer().serialize(e, _forceTypeHint))
                : undefined,
            sumPayingTransactionInfoLines: entity.sumPayingTransactionInfoLines,
            deductionTransactionInfoLines: entity.deductionTransactionInfoLines
                ? entity.deductionTransactionInfoLines.map(e => new TransactionInfoLineSerializer().serialize(e, _forceTypeHint))
                : undefined,
            sumDeductionTransactionInfoLines: entity.sumDeductionTransactionInfoLines
        };
    }
}
