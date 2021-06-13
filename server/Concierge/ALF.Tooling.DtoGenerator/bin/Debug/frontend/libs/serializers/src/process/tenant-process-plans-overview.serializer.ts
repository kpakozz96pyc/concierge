import { TenantProcessPeriodSummarySerializer } from "./tenant-process-period-summary.serializer";
import { Serializer } from "@alf/core/models";
import { TenantProcessPlansOverview } from "@alf/models/process/tenant-process-plans-overview";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class TenantProcessPlansOverviewSerializer implements Serializer<TenantProcessPlansOverview> {

    deserialize(data: undefined): undefined
    deserialize(data: any): TenantProcessPlansOverview
    deserialize(data: any): TenantProcessPlansOverview | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        copy.processPeriodSummaries = (copy.processPeriodSummaries || []).map(new TenantProcessPeriodSummarySerializer().deserialize);

        return new TenantProcessPlansOverview(copy);
    }

    serialize(entity: TenantProcessPlansOverview | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: TenantProcessPlansOverview, _forceTypeHint?: boolean): any
    serialize(entity: TenantProcessPlansOverview | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? TenantProcessPlansOverview.typeNameHint : undefined,
            requiresManualActionCount: entity.requiresManualActionCount,
            activeProcessPlanAndPeriodCount: entity.activeProcessPlanAndPeriodCount,
            recentlyFinishedCount: entity.recentlyFinishedCount,
            processPlansRunningCount: entity.processPlansRunningCount,
            processPeriodSummaries: entity.processPeriodSummaries
                ? entity.processPeriodSummaries.map(e => new TenantProcessPeriodSummarySerializer().serialize(e, _forceTypeHint))
                : undefined
        };
    }
}
