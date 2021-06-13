import { MetaJobParameterMetadataSerializer } from "./meta-job-parameter-metadata.serializer";
import { Serializer } from "@alf/core/models";
import { MetaJobMetadata } from "@alf/models/jobs/meta-job-metadata";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class MetaJobMetadataSerializer implements Serializer<MetaJobMetadata> {

    deserialize(data: undefined): undefined
    deserialize(data: any): MetaJobMetadata
    deserialize(data: any): MetaJobMetadata | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        copy.parameters = (copy.parameters || []).map(new MetaJobParameterMetadataSerializer().deserialize);

        return new MetaJobMetadata(copy);
    }

    serialize(entity: MetaJobMetadata | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: MetaJobMetadata, _forceTypeHint?: boolean): any
    serialize(entity: MetaJobMetadata | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? MetaJobMetadata.typeNameHint : undefined,
            id: entity.id,
            jobTypeName: entity.jobTypeName,
            description: entity.description,
            canBeUsedAsStepJob: entity.canBeUsedAsStepJob,
            usedForProcessTemplateType: entity.usedForProcessTemplateType,
            canBeUsedAsScheduledJob: entity.canBeUsedAsScheduledJob,
            canBeOrderedManually: entity.canBeOrderedManually,
            canBeManuallyAddedToInstance: entity.canBeManuallyAddedToInstance,
            parameters: entity.parameters
                ? entity.parameters.map(e => new MetaJobParameterMetadataSerializer().serialize(e, _forceTypeHint))
                : undefined
        };
    }
}
