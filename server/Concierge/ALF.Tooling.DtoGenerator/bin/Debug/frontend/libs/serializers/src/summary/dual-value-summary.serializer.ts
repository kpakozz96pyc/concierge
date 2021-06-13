import { Serializer } from "@alf/core/models";
import { DualValueSummary } from "@alf/models/summary/dual-value-summary";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class DualValueSummarySerializer implements Serializer<DualValueSummary> {

    deserialize(data: undefined): undefined
    deserialize(data: any): DualValueSummary
    deserialize(data: any): DualValueSummary | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };

        return new DualValueSummary(copy);
    }

    serialize(entity: DualValueSummary | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: DualValueSummary, _forceTypeHint?: boolean): any
    serialize(entity: DualValueSummary | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: entity.$type,
            firstValue: entity.firstValue,
            secondValue: entity.secondValue
        };
    }
}
