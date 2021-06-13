import { ReportFilterType } from "@alf/models/reports/enums/report-filter-type";
import { Serializer } from "@alf/core/models";
import { ReportFilter } from "@alf/models/reports/report-filter";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class ReportFilterSerializer implements Serializer<ReportFilter> {

    deserialize(data: undefined): undefined
    deserialize(data: any): ReportFilter
    deserialize(data: any): ReportFilter | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        copy.filterType = ReportFilterType[copy.filterType];

        return new ReportFilter(copy);
    }

    serialize(entity: ReportFilter | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: ReportFilter, _forceTypeHint?: boolean): any
    serialize(entity: ReportFilter | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? ReportFilter.typeNameHint : undefined,
            id: entity.id,
            lookupId: entity.lookupId,
            filterType: ReportFilterType[entity.filterType],
            name: entity.name,
            value: entity.value
        };
    }
}
