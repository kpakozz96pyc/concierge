import { GroupedTransactionInfoLineSerializer } from "./grouped-transaction-info-line.serializer";
import { NonGroupedTransactionInfoLineSerializer } from "./non-grouped-transaction-info-line.serializer";
import { SingleTransactionInfoLineSerializer } from "./single-transaction-info-line.serializer";
import { SplitTransactionInfoLineSerializer } from "./split-transaction-info-line.serializer";
import { GroupedTransactionInfoLine } from "@alf/models/transactions/grouped-transaction-info-line";
import { NonGroupedTransactionInfoLine } from "@alf/models/transactions/non-grouped-transaction-info-line";
import { SingleTransactionInfoLine } from "@alf/models/transactions/single-transaction-info-line";
import { SplitTransactionInfoLine } from "@alf/models/transactions/split-transaction-info-line";
import { Serializer } from "@alf/core/models";
import { TransactionInfoLine } from "@alf/models/transactions/transaction-info-line";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class TransactionInfoLineSerializer implements Serializer<TransactionInfoLine> {

    deserialize(data: undefined): undefined
    deserialize(data: any): TransactionInfoLine
    deserialize(data: any): TransactionInfoLine | undefined {
        if (!data) {
            return undefined;
        }

        if (data.$type === "ALF.Shared.Dto.Models.Transactions.GroupedTransactionInfoLine, ALF.Shared.Dto")
            return new GroupedTransactionInfoLineSerializer().deserialize(data);

        if (data.$type === "ALF.Shared.Dto.Models.Transactions.NonGroupedTransactionInfoLine, ALF.Shared.Dto")
            return new NonGroupedTransactionInfoLineSerializer().deserialize(data);

        if (data.$type === "ALF.Shared.Dto.Models.Transactions.SingleTransactionInfoLine, ALF.Shared.Dto")
            return new SingleTransactionInfoLineSerializer().deserialize(data);

        if (data.$type === "ALF.Shared.Dto.Models.Transactions.SplitTransactionInfoLine, ALF.Shared.Dto")
            return new SplitTransactionInfoLineSerializer().deserialize(data);

        throw new Error("Unable to deserialize TransactionInfoLine, cannot infer type from " + data.$type);
    }

    serialize(entity: TransactionInfoLine | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: TransactionInfoLine, _forceTypeHint?: boolean): any
    serialize(entity: TransactionInfoLine | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        if (entity.$type === "ALF.Shared.Dto.Models.Transactions.GroupedTransactionInfoLine, ALF.Shared.Dto")
            return new GroupedTransactionInfoLineSerializer().serialize(entity as GroupedTransactionInfoLine, _forceTypeHint);

        if (entity.$type === "ALF.Shared.Dto.Models.Transactions.NonGroupedTransactionInfoLine, ALF.Shared.Dto")
            return new NonGroupedTransactionInfoLineSerializer().serialize(entity as NonGroupedTransactionInfoLine, _forceTypeHint);

        if (entity.$type === "ALF.Shared.Dto.Models.Transactions.SingleTransactionInfoLine, ALF.Shared.Dto")
            return new SingleTransactionInfoLineSerializer().serialize(entity as SingleTransactionInfoLine, _forceTypeHint);

        if (entity.$type === "ALF.Shared.Dto.Models.Transactions.SplitTransactionInfoLine, ALF.Shared.Dto")
            return new SplitTransactionInfoLineSerializer().serialize(entity as SplitTransactionInfoLine, _forceTypeHint);

        throw new Error("Unable to serialize TransactionInfoLine, cannot infer type from " + entity.$type);
    }
}
