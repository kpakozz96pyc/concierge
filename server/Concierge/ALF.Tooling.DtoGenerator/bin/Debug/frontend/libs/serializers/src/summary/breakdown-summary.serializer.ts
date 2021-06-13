import { Serializer } from "@alf/core/models";
import { BreakdownSummary } from "@alf/models/summary/breakdown-summary";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class BreakdownSummarySerializer implements Serializer<BreakdownSummary> {

    deserialize(data: undefined): undefined
    deserialize(data: any): BreakdownSummary
    deserialize(data: any): BreakdownSummary | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };

        return new BreakdownSummary(copy);
    }

    serialize(entity: BreakdownSummary | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: BreakdownSummary, _forceTypeHint?: boolean): any
    serialize(entity: BreakdownSummary | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: entity.$type,
            values: entity.values
        };
    }
}
