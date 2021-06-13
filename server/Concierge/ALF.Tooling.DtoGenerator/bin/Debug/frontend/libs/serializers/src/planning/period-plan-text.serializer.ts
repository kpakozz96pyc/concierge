import { Serializer } from "@alf/core/models";
import { PeriodPlanText } from "@alf/models/planning/period-plan-text";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class PeriodPlanTextSerializer implements Serializer<PeriodPlanText> {

    deserialize(data: undefined): undefined
    deserialize(data: any): PeriodPlanText
    deserialize(data: any): PeriodPlanText | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };

        return new PeriodPlanText(copy);
    }

    serialize(entity: PeriodPlanText | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: PeriodPlanText, _forceTypeHint?: boolean): any
    serialize(entity: PeriodPlanText | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? PeriodPlanText.typeNameHint : undefined,
            id: entity.id,
            periodPlanId: entity.periodPlanId,
            text: entity.text
        };
    }
}
