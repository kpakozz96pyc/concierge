import { Serializer } from "@alf/core/models";
import { ProcessPopulationType } from "@alf/models/data-access/process-population-type";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class ProcessPopulationTypeSerializer implements Serializer<ProcessPopulationType> {

    deserialize(data: undefined): undefined
    deserialize(data: any): ProcessPopulationType
    deserialize(data: any): ProcessPopulationType | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };

        return new ProcessPopulationType(copy);
    }

    serialize(entity: ProcessPopulationType | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: ProcessPopulationType, _forceTypeHint?: boolean): any
    serialize(entity: ProcessPopulationType | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? ProcessPopulationType.typeNameHint : undefined,
            processId: entity.processId,
            populationType: entity.populationType
        };
    }
}
