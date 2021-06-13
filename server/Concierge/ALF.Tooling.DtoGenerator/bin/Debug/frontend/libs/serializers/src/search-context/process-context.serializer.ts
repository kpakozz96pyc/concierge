import { Serializer } from "@alf/core/models";
import { ProcessContext } from "@alf/models/search-context/process-context";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class ProcessContextSerializer implements Serializer<ProcessContext> {

    deserialize(data: undefined): undefined
    deserialize(data: any): ProcessContext
    deserialize(data: any): ProcessContext | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };

        return new ProcessContext(copy);
    }

    serialize(entity: ProcessContext | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: ProcessContext, _forceTypeHint?: boolean): any
    serialize(entity: ProcessContext | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? ProcessContext.typeNameHint : undefined,
            processId: entity.processId
        };
    }
}
