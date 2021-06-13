import { Serializer } from "@alf/core/models";
import { ProcessActionResult } from "@alf/models/import/process-action-result";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class ProcessActionResultSerializer implements Serializer<ProcessActionResult> {

    deserialize(data: undefined): undefined
    deserialize(data: any): ProcessActionResult
    deserialize(data: any): ProcessActionResult | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };

        return new ProcessActionResult(copy);
    }

    serialize(entity: ProcessActionResult | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: ProcessActionResult, _forceTypeHint?: boolean): any
    serialize(entity: ProcessActionResult | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? ProcessActionResult.typeNameHint : undefined,
            sourceHeap: entity.sourceHeap,
            newHeap: entity.newHeap
        };
    }
}
