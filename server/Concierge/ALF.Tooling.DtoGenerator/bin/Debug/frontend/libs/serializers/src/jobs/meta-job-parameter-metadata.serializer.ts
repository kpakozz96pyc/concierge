import { Serializer } from "@alf/core/models";
import { MetaJobParameterMetadata } from "@alf/models/jobs/meta-job-parameter-metadata";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class MetaJobParameterMetadataSerializer implements Serializer<MetaJobParameterMetadata> {

    deserialize(data: undefined): undefined
    deserialize(data: any): MetaJobParameterMetadata
    deserialize(data: any): MetaJobParameterMetadata | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };

        return new MetaJobParameterMetadata(copy);
    }

    serialize(entity: MetaJobParameterMetadata | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: MetaJobParameterMetadata, _forceTypeHint?: boolean): any
    serialize(entity: MetaJobParameterMetadata | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? MetaJobParameterMetadata.typeNameHint : undefined,
            id: entity.id,
            description: entity.description,
            parameterType: entity.parameterType,
            stepJobResolveRule: entity.stepJobResolveRule,
            scheduledJobResolveRule: entity.scheduledJobResolveRule,
            defaultValue: entity.defaultValue
        };
    }
}
