import { FilterDateType } from "@alf/models/core/enums/filter-date-type";
import { FilterDateCriteria } from "@alf/models/transactions/enums/filter-date-criteria";
import { WebTransactionStatus } from "@alf/models/transactions/enums/web-transaction-status";
import { serializeDate } from "@alf/core";
import { Serializer } from "@alf/core/models";
import { WebTransactionFilter } from "@alf/models/transactions/web-transaction-filter";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class WebTransactionFilterSerializer implements Serializer<WebTransactionFilter> {

    deserialize(data: undefined): undefined
    deserialize(data: any): WebTransactionFilter
    deserialize(data: any): WebTransactionFilter | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        copy.statuses = (copy.statuses || []).map((item: any) => WebTransactionStatus[item]);

        copy.dateType = FilterDateType[copy.dateType];

        copy.dateCriteria = FilterDateCriteria[copy.dateCriteria];

        if (copy.fromDate !== undefined)
            copy.fromDate = new Date(copy.fromDate);

        if (copy.toDate !== undefined)
            copy.toDate = new Date(copy.toDate);

        return new WebTransactionFilter(copy);
    }

    serialize(entity: WebTransactionFilter | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: WebTransactionFilter, _forceTypeHint?: boolean): any
    serialize(entity: WebTransactionFilter | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? WebTransactionFilter.typeNameHint : undefined,
            id: entity.id,
            statuses: entity.statuses
                ? entity.statuses.map(item => WebTransactionStatus[item])
                : undefined,
            itemCount: entity.itemCount,
            dateType: FilterDateType[entity.dateType],
            dateCriteria: FilterDateCriteria[entity.dateCriteria],
            fromDate: serializeDate(entity.fromDate),
            toDate: serializeDate(entity.toDate),
            payCodes: entity.payCodes
        };
    }
}
