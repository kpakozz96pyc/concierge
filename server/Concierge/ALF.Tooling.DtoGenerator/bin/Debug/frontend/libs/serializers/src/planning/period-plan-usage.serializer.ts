import { serializeDate } from "@alf/core";
import { Serializer } from "@alf/core/models";
import { PeriodPlanUsage } from "@alf/models/planning/period-plan-usage";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class PeriodPlanUsageSerializer implements Serializer<PeriodPlanUsage> {

    deserialize(data: undefined): undefined
    deserialize(data: any): PeriodPlanUsage
    deserialize(data: any): PeriodPlanUsage | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        copy.useFrom = new Date(copy.useFrom);

        if (copy.useUntil !== undefined)
            copy.useUntil = new Date(copy.useUntil);

        return new PeriodPlanUsage(copy);
    }

    serialize(entity: PeriodPlanUsage | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: PeriodPlanUsage, _forceTypeHint?: boolean): any
    serialize(entity: PeriodPlanUsage | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? PeriodPlanUsage.typeNameHint : undefined,
            id: entity.id,
            periodPlanUsageCode: entity.periodPlanUsageCode,
            companyId: entity.companyId,
            periodPlanId: entity.periodPlanId,
            useFrom: serializeDate(entity.useFrom),
            useUntil: serializeDate(entity.useUntil),
            isPreview: entity.isPreview
        };
    }
}
