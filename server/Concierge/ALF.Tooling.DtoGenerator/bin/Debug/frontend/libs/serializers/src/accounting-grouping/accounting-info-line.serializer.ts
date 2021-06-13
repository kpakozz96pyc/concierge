import { GroupedAccountingInfoLineSerializer } from "./grouped-accounting-info-line.serializer";
import { SingleTransactionAccountingInfoLineSerializer } from "./single-transaction-accounting-info-line.serializer";
import { GroupedAccountingInfoLine } from "@alf/models/accounting-grouping/grouped-accounting-info-line";
import { SingleTransactionAccountingInfoLine } from "@alf/models/accounting-grouping/single-transaction-accounting-info-line";
import { Serializer } from "@alf/core/models";
import { AccountingInfoLine } from "@alf/models/accounting-grouping/accounting-info-line";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class AccountingInfoLineSerializer implements Serializer<AccountingInfoLine> {

    deserialize(data: undefined): undefined
    deserialize(data: any): AccountingInfoLine
    deserialize(data: any): AccountingInfoLine | undefined {
        if (!data) {
            return undefined;
        }

        if (data.$type === "ALF.Shared.Dto.Models.Transactions.AccountingGrouping.GroupedAccountingInfoLine, ALF.Shared.Dto")
            return new GroupedAccountingInfoLineSerializer().deserialize(data);

        if (data.$type === "ALF.Shared.Dto.Models.Transactions.AccountingGrouping.SingleTransactionAccountingInfoLine, ALF.Shared.Dto")
            return new SingleTransactionAccountingInfoLineSerializer().deserialize(data);

        throw new Error("Unable to deserialize AccountingInfoLine, cannot infer type from " + data.$type);
    }

    serialize(entity: AccountingInfoLine | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: AccountingInfoLine, _forceTypeHint?: boolean): any
    serialize(entity: AccountingInfoLine | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        if (entity.$type === "ALF.Shared.Dto.Models.Transactions.AccountingGrouping.GroupedAccountingInfoLine, ALF.Shared.Dto")
            return new GroupedAccountingInfoLineSerializer().serialize(entity as GroupedAccountingInfoLine, _forceTypeHint);

        if (entity.$type === "ALF.Shared.Dto.Models.Transactions.AccountingGrouping.SingleTransactionAccountingInfoLine, ALF.Shared.Dto")
            return new SingleTransactionAccountingInfoLineSerializer().serialize(entity as SingleTransactionAccountingInfoLine, _forceTypeHint);

        throw new Error("Unable to serialize AccountingInfoLine, cannot infer type from " + entity.$type);
    }
}
