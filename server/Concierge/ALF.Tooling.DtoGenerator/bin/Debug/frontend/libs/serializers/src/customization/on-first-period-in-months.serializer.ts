import { Serializer } from "@alf/core/models";
import { OnFirstPeriodInMonths } from "@alf/models/customization/on-first-period-in-months";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class OnFirstPeriodInMonthsSerializer implements Serializer<OnFirstPeriodInMonths> {

    deserialize(data: undefined): undefined
    deserialize(data: any): OnFirstPeriodInMonths
    deserialize(data: any): OnFirstPeriodInMonths | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };

        return new OnFirstPeriodInMonths(copy);
    }

    serialize(entity: OnFirstPeriodInMonths | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: OnFirstPeriodInMonths, _forceTypeHint?: boolean): any
    serialize(entity: OnFirstPeriodInMonths | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: entity.$type,
            months: entity.months
        };
    }
}
