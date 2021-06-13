import { Serializer } from "@alf/core/models";
import { AggregatedControlResult } from "@alf/models/result/aggregated-control-result";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class AggregatedControlResultSerializer implements Serializer<AggregatedControlResult> {

    deserialize(data: undefined): undefined
    deserialize(data: any): AggregatedControlResult
    deserialize(data: any): AggregatedControlResult | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };

        return new AggregatedControlResult(copy);
    }

    serialize(entity: AggregatedControlResult | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: AggregatedControlResult, _forceTypeHint?: boolean): any
    serialize(entity: AggregatedControlResult | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? AggregatedControlResult.typeNameHint : undefined,
            controlDefinitionId: entity.controlDefinitionId,
            severity: entity.severity,
            rowCount: entity.rowCount
        };
    }
}
