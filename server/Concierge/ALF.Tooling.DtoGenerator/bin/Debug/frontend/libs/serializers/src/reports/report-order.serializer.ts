import { ReportAffiliation } from "@alf/models/reports/enums/report-affiliation";
import { ReportFilterSerializer } from "./report-filter.serializer";
import { Serializer } from "@alf/core/models";
import { ReportOrder } from "@alf/models/reports/report-order";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class ReportOrderSerializer implements Serializer<ReportOrder> {

    deserialize(data: undefined): undefined
    deserialize(data: any): ReportOrder
    deserialize(data: any): ReportOrder | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        copy.filters = (copy.filters || []).map(new ReportFilterSerializer().deserialize);

        copy.affiliation = ReportAffiliation[copy.affiliation];

        return new ReportOrder(copy);
    }

    serialize(entity: ReportOrder | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: ReportOrder, _forceTypeHint?: boolean): any
    serialize(entity: ReportOrder | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? ReportOrder.typeNameHint : undefined,
            reportTemplateId: entity.reportTemplateId,
            description: entity.description,
            filters: entity.filters
                ? entity.filters.map(e => new ReportFilterSerializer().serialize(e, _forceTypeHint))
                : undefined,
            affiliation: ReportAffiliation[entity.affiliation]
        };
    }
}
