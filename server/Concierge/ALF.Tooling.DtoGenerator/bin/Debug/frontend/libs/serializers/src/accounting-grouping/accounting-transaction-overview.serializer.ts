import { GroupedAccountingInfoLineSerializer } from "./grouped-accounting-info-line.serializer";
import { Serializer } from "@alf/core/models";
import { AccountingTransactionOverview } from "@alf/models/accounting-grouping/accounting-transaction-overview";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class AccountingTransactionOverviewSerializer implements Serializer<AccountingTransactionOverview> {

    deserialize(data: undefined): undefined
    deserialize(data: any): AccountingTransactionOverview
    deserialize(data: any): AccountingTransactionOverview | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        copy.lines = (copy.lines || []).map(new GroupedAccountingInfoLineSerializer().deserialize);

        return new AccountingTransactionOverview(copy);
    }

    serialize(entity: AccountingTransactionOverview | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: AccountingTransactionOverview, _forceTypeHint?: boolean): any
    serialize(entity: AccountingTransactionOverview | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? AccountingTransactionOverview.typeNameHint : undefined,
            id: entity.id,
            employeeId: entity.employeeId,
            periodIdRangeFrom: entity.periodIdRangeFrom,
            periodIdRangeUntil: entity.periodIdRangeUntil,
            aggregatedColumns: entity.aggregatedColumns,
            detailColumns: entity.detailColumns,
            hiddenColumns: entity.hiddenColumns,
            lines: entity.lines
                ? entity.lines.map(e => new GroupedAccountingInfoLineSerializer().serialize(e, _forceTypeHint))
                : undefined
        };
    }
}
