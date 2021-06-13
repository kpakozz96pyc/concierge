import { serializeDate } from "@alf/core";
import { Serializer } from "@alf/core/models";
import { AbsenceInputTransactionSearchFilter } from "@alf/models/absence/absence-input-transaction-search-filter";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class AbsenceInputTransactionSearchFilterSerializer implements Serializer<AbsenceInputTransactionSearchFilter> {

    deserialize(data: undefined): undefined
    deserialize(data: any): AbsenceInputTransactionSearchFilter
    deserialize(data: any): AbsenceInputTransactionSearchFilter | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        if (copy.fromDate !== undefined)
            copy.fromDate = new Date(copy.fromDate);

        if (copy.toDate !== undefined)
            copy.toDate = new Date(copy.toDate);

        return new AbsenceInputTransactionSearchFilter(copy);
    }

    serialize(entity: AbsenceInputTransactionSearchFilter | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: AbsenceInputTransactionSearchFilter, _forceTypeHint?: boolean): any
    serialize(entity: AbsenceInputTransactionSearchFilter | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? AbsenceInputTransactionSearchFilter.typeNameHint : undefined,
            fromDate: serializeDate(entity.fromDate),
            toDate: serializeDate(entity.toDate),
            exclude: entity.exclude
        };
    }
}
