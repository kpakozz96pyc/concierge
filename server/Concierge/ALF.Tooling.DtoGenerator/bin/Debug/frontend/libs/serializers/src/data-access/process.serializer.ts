import { ProcessPopulationTypeSerializer } from "./process-population-type.serializer";
import { Serializer } from "@alf/core/models";
import { Process } from "@alf/models/data-access/process";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class ProcessSerializer implements Serializer<Process> {

    deserialize(data: undefined): undefined
    deserialize(data: any): Process
    deserialize(data: any): Process | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        copy.populationTypes = (copy.populationTypes || []).map(new ProcessPopulationTypeSerializer().deserialize);

        return new Process(copy);
    }

    serialize(entity: Process | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: Process, _forceTypeHint?: boolean): any
    serialize(entity: Process | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? Process.typeNameHint : undefined,
            id: entity.id,
            name: entity.name,
            processLevel: entity.processLevel,
            featureGroup: entity.featureGroup,
            feature: entity.feature,
            populationTypes: entity.populationTypes
                ? entity.populationTypes.map(e => new ProcessPopulationTypeSerializer().serialize(e, _forceTypeHint))
                : undefined
        };
    }
}
