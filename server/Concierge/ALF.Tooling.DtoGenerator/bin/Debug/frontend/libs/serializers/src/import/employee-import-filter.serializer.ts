import { FilterDateType } from "@alf/models/core/enums/filter-date-type";
import { EmployeeImportStatusFilter } from "@alf/models/import/enums/employee-import-status-filter";
import { serializeDate } from "@alf/core";
import { Serializer } from "@alf/core/models";
import { EmployeeImportFilter } from "@alf/models/import/employee-import-filter";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class EmployeeImportFilterSerializer implements Serializer<EmployeeImportFilter> {

    deserialize(data: undefined): undefined
    deserialize(data: any): EmployeeImportFilter
    deserialize(data: any): EmployeeImportFilter | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        copy.statuses = (copy.statuses || []).map((item: any) => EmployeeImportStatusFilter[item]);

        copy.dateType = FilterDateType[copy.dateType];

        if (copy.fromDate !== undefined)
            copy.fromDate = new Date(copy.fromDate);

        if (copy.toDate !== undefined)
            copy.toDate = new Date(copy.toDate);

        return new EmployeeImportFilter(copy);
    }

    serialize(entity: EmployeeImportFilter | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: EmployeeImportFilter, _forceTypeHint?: boolean): any
    serialize(entity: EmployeeImportFilter | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? EmployeeImportFilter.typeNameHint : undefined,
            statuses: entity.statuses
                ? entity.statuses.map(item => EmployeeImportStatusFilter[item])
                : undefined,
            dateType: FilterDateType[entity.dateType],
            fromDate: serializeDate(entity.fromDate),
            toDate: serializeDate(entity.toDate),
            pipelines: entity.pipelines
        };
    }
}
