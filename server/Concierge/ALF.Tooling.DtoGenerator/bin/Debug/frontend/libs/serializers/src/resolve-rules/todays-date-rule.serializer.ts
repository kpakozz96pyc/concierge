import { Serializer } from "@alf/core/models";
import { TodaysDateRule } from "@alf/models/resolve-rules/todays-date-rule";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class TodaysDateRuleSerializer implements Serializer<TodaysDateRule> {

    deserialize(data: undefined): undefined
    deserialize(data: any): TodaysDateRule
    deserialize(data: any): TodaysDateRule | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };

        return new TodaysDateRule(copy);
    }

    serialize(entity: TodaysDateRule | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: TodaysDateRule, _forceTypeHint?: boolean): any
    serialize(entity: TodaysDateRule | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: entity.$type
        };
    }
}
