import { serializeDate } from "@alf/core";
import { Serializer } from "@alf/core/models";
import { PeriodPlanUsageExtendedInformation } from "@alf/models/extended-information/period-plan-usage-extended-information";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class PeriodPlanUsageExtendedInformationSerializer implements Serializer<PeriodPlanUsageExtendedInformation> {

    deserialize(data: undefined): undefined
    deserialize(data: any): PeriodPlanUsageExtendedInformation
    deserialize(data: any): PeriodPlanUsageExtendedInformation | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        copy.useFrom = new Date(copy.useFrom);

        if (copy.useUntil !== undefined)
            copy.useUntil = new Date(copy.useUntil);

        return new PeriodPlanUsageExtendedInformation(copy);
    }

    serialize(entity: PeriodPlanUsageExtendedInformation | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: PeriodPlanUsageExtendedInformation, _forceTypeHint?: boolean): any
    serialize(entity: PeriodPlanUsageExtendedInformation | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? PeriodPlanUsageExtendedInformation.typeNameHint : undefined,
            periodPlanId: entity.periodPlanId,
            useFrom: serializeDate(entity.useFrom),
            useUntil: serializeDate(entity.useUntil),
            isPreview: entity.isPreview
        };
    }
}
