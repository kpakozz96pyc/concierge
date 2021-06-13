import { Serializer } from "@alf/core/models";
import { ProcessTemplateContext } from "@alf/models/search-context/process-template-context";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class ProcessTemplateContextSerializer implements Serializer<ProcessTemplateContext> {

    deserialize(data: undefined): undefined
    deserialize(data: any): ProcessTemplateContext
    deserialize(data: any): ProcessTemplateContext | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };

        return new ProcessTemplateContext(copy);
    }

    serialize(entity: ProcessTemplateContext | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: ProcessTemplateContext, _forceTypeHint?: boolean): any
    serialize(entity: ProcessTemplateContext | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? ProcessTemplateContext.typeNameHint : undefined,
            templateId: entity.templateId
        };
    }
}
