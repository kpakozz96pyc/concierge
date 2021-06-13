import { Serializer } from "@alf/core/models";
import { ProcessTemplateSet } from "@alf/models/template/process-template-set";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class ProcessTemplateSetSerializer implements Serializer<ProcessTemplateSet> {

    deserialize(data: undefined): undefined
    deserialize(data: any): ProcessTemplateSet
    deserialize(data: any): ProcessTemplateSet | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };

        return new ProcessTemplateSet(copy);
    }

    serialize(entity: ProcessTemplateSet | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: ProcessTemplateSet, _forceTypeHint?: boolean): any
    serialize(entity: ProcessTemplateSet | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? ProcessTemplateSet.typeNameHint : undefined,
            id: entity.id,
            isSystemShipped: entity.isSystemShipped,
            title: entity.title,
            description: entity.description,
            canConnectToCompany: entity.canConnectToCompany,
            templateIds: entity.templateIds,
            linkedTemplateSets: entity.linkedTemplateSets
        };
    }
}
