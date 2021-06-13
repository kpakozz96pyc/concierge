import { Serializer } from "@alf/core/models";
import { SingleValueSummary } from "@alf/models/summary/single-value-summary";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class SingleValueSummarySerializer implements Serializer<SingleValueSummary> {

    deserialize(data: undefined): undefined
    deserialize(data: any): SingleValueSummary
    deserialize(data: any): SingleValueSummary | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };

        return new SingleValueSummary(copy);
    }

    serialize(entity: SingleValueSummary | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: SingleValueSummary, _forceTypeHint?: boolean): any
    serialize(entity: SingleValueSummary | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: entity.$type,
            value: entity.value
        };
    }
}
