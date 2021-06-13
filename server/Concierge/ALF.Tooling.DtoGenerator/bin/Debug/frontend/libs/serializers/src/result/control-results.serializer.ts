import { AggregatedControlResultSerializer } from "./aggregated-control-result.serializer";
import { Serializer } from "@alf/core/models";
import { ControlResults } from "@alf/models/result/control-results";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class ControlResultsSerializer implements Serializer<ControlResults> {

    deserialize(data: undefined): undefined
    deserialize(data: any): ControlResults
    deserialize(data: any): ControlResults | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        if (copy.calculatedAt !== undefined)
            copy.calculatedAt = new Date(copy.calculatedAt);

        copy.results = (copy.results || []).map(new AggregatedControlResultSerializer().deserialize);

        return new ControlResults(copy);
    }

    serialize(entity: ControlResults | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: ControlResults, _forceTypeHint?: boolean): any
    serialize(entity: ControlResults | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? ControlResults.typeNameHint : undefined,
            id: entity.id,
            periodId: entity.periodId,
            calculatedAt: entity.calculatedAt
                ? entity.calculatedAt.toISOString()
                : undefined,
            results: entity.results
                ? entity.results.map(e => new AggregatedControlResultSerializer().serialize(e, _forceTypeHint))
                : undefined
        };
    }
}
