import { Serializer } from "@alf/core/models";
import { SystemParameterProcessTemplateSetCategory } from "@alf/models/system-parameters/system-parameter-process-template-set-category";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class SystemParameterProcessTemplateSetCategorySerializer implements Serializer<SystemParameterProcessTemplateSetCategory> {

    deserialize(data: undefined): undefined
    deserialize(data: any): SystemParameterProcessTemplateSetCategory
    deserialize(data: any): SystemParameterProcessTemplateSetCategory | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };

        return new SystemParameterProcessTemplateSetCategory(copy);
    }

    serialize(entity: SystemParameterProcessTemplateSetCategory | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: SystemParameterProcessTemplateSetCategory, _forceTypeHint?: boolean): any
    serialize(entity: SystemParameterProcessTemplateSetCategory | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: entity.$type,
            processTemplateSet: entity.processTemplateSet,
            id: entity.id,
            code: entity.code,
            description: entity.description
        };
    }
}
