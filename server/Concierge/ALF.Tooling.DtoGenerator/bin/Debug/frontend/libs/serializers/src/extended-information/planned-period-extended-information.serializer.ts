import { serializeDate } from "@alf/core";
import { Serializer } from "@alf/core/models";
import { PlannedPeriodExtendedInformation } from "@alf/models/extended-information/planned-period-extended-information";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class PlannedPeriodExtendedInformationSerializer implements Serializer<PlannedPeriodExtendedInformation> {

    deserialize(data: undefined): undefined
    deserialize(data: any): PlannedPeriodExtendedInformation
    deserialize(data: any): PlannedPeriodExtendedInformation | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        copy.payDate = new Date(copy.payDate);

        return new PlannedPeriodExtendedInformation(copy);
    }

    serialize(entity: PlannedPeriodExtendedInformation | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: PlannedPeriodExtendedInformation, _forceTypeHint?: boolean): any
    serialize(entity: PlannedPeriodExtendedInformation | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? PlannedPeriodExtendedInformation.typeNameHint : undefined,
            periodPlanId: entity.periodPlanId,
            payDate: serializeDate(entity.payDate),
            isPeriodCreated: entity.isPeriodCreated,
            planningStatus: entity.planningStatus
        };
    }
}
