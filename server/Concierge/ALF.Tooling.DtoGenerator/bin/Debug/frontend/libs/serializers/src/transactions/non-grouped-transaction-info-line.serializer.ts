import { SingleTransactionInfoLineSerializer } from "./single-transaction-info-line.serializer";
import { SplitTransactionInfoLineSerializer } from "./split-transaction-info-line.serializer";
import { SingleTransactionInfoLine } from "@alf/models/transactions/single-transaction-info-line";
import { SplitTransactionInfoLine } from "@alf/models/transactions/split-transaction-info-line";
import { Serializer } from "@alf/core/models";
import { NonGroupedTransactionInfoLine } from "@alf/models/transactions/non-grouped-transaction-info-line";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class NonGroupedTransactionInfoLineSerializer implements Serializer<NonGroupedTransactionInfoLine> {

    deserialize(data: undefined): undefined
    deserialize(data: any): NonGroupedTransactionInfoLine
    deserialize(data: any): NonGroupedTransactionInfoLine | undefined {
        if (!data) {
            return undefined;
        }

        if (data.$type === "ALF.Shared.Dto.Models.Transactions.SingleTransactionInfoLine, ALF.Shared.Dto")
            return new SingleTransactionInfoLineSerializer().deserialize(data);

        if (data.$type === "ALF.Shared.Dto.Models.Transactions.SplitTransactionInfoLine, ALF.Shared.Dto")
            return new SplitTransactionInfoLineSerializer().deserialize(data);

        throw new Error("Unable to deserialize NonGroupedTransactionInfoLine, cannot infer type from " + data.$type);
    }

    serialize(entity: NonGroupedTransactionInfoLine | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: NonGroupedTransactionInfoLine, _forceTypeHint?: boolean): any
    serialize(entity: NonGroupedTransactionInfoLine | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        if (entity.$type === "ALF.Shared.Dto.Models.Transactions.SingleTransactionInfoLine, ALF.Shared.Dto")
            return new SingleTransactionInfoLineSerializer().serialize(entity as SingleTransactionInfoLine, _forceTypeHint);

        if (entity.$type === "ALF.Shared.Dto.Models.Transactions.SplitTransactionInfoLine, ALF.Shared.Dto")
            return new SplitTransactionInfoLineSerializer().serialize(entity as SplitTransactionInfoLine, _forceTypeHint);

        throw new Error("Unable to serialize NonGroupedTransactionInfoLine, cannot infer type from " + entity.$type);
    }
}
