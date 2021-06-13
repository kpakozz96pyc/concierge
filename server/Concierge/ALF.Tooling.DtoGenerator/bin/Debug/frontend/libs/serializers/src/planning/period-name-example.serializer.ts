import { Serializer } from "@alf/core/models";
import { PeriodNameExample } from "@alf/models/planning/period-name-example";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class PeriodNameExampleSerializer implements Serializer<PeriodNameExample> {

    deserialize(data: undefined): undefined
    deserialize(data: any): PeriodNameExample
    deserialize(data: any): PeriodNameExample | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };

        return new PeriodNameExample(copy);
    }

    serialize(entity: PeriodNameExample | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: PeriodNameExample, _forceTypeHint?: boolean): any
    serialize(entity: PeriodNameExample | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? PeriodNameExample.typeNameHint : undefined,
            example: entity.example
        };
    }
}
