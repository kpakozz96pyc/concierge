import { Serializer } from "@alf/core/models";
import { OnFirstPeriodInEveryMonth } from "@alf/models/customization/on-first-period-in-every-month";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class OnFirstPeriodInEveryMonthSerializer implements Serializer<OnFirstPeriodInEveryMonth> {

    deserialize(data: undefined): undefined
    deserialize(data: any): OnFirstPeriodInEveryMonth
    deserialize(data: any): OnFirstPeriodInEveryMonth | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };

        return new OnFirstPeriodInEveryMonth(copy);
    }

    serialize(entity: OnFirstPeriodInEveryMonth | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: OnFirstPeriodInEveryMonth, _forceTypeHint?: boolean): any
    serialize(entity: OnFirstPeriodInEveryMonth | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: entity.$type
        };
    }
}
