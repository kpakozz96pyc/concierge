import { Serializer } from "@alf/core/models";
import { IntegrationPipeline } from "@alf/models/integration/integration-pipeline";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class IntegrationPipelineSerializer implements Serializer<IntegrationPipeline> {

    deserialize(data: undefined): undefined
    deserialize(data: any): IntegrationPipeline
    deserialize(data: any): IntegrationPipeline | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };

        return new IntegrationPipeline(copy);
    }

    serialize(entity: IntegrationPipeline | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: IntegrationPipeline, _forceTypeHint?: boolean): any
    serialize(entity: IntegrationPipeline | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? IntegrationPipeline.typeNameHint : undefined,
            id: entity.id,
            integrationPipelineCode: entity.integrationPipelineCode,
            description: entity.description,
            directionIn: entity.directionIn,
            directionOut: entity.directionOut,
            externalSystemId: entity.externalSystemId,
            fileFormat: entity.fileFormat,
            importDefinitionId: entity.importDefinitionId,
            replacementIdForCompany: entity.replacementIdForCompany,
            importPipelineId: entity.importPipelineId,
            exportPipelineId: entity.exportPipelineId,
            targetTenantId: entity.targetTenantId
        };
    }
}
