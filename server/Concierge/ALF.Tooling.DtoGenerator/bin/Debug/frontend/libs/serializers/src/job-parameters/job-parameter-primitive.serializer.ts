import { Serializer } from "@alf/core/models";
import { JobParameterPrimitive } from "@alf/models/job-parameters/job-parameter-primitive";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class JobParameterPrimitiveSerializer implements Serializer<JobParameterPrimitive> {

    deserialize(data: undefined): undefined
    deserialize(data: any): JobParameterPrimitive
    deserialize(data: any): JobParameterPrimitive | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };

        return new JobParameterPrimitive(copy);
    }

    serialize(entity: JobParameterPrimitive | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: JobParameterPrimitive, _forceTypeHint?: boolean): any
    serialize(entity: JobParameterPrimitive | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: entity.$type,
            type: entity.type,
            name: entity.name
        };
    }
}
