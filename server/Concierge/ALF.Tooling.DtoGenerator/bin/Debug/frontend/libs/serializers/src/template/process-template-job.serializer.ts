import { ProcessTemplateJobParameterSerializer } from "./process-template-job-parameter.serializer";
import { Serializer } from "@alf/core/models";
import { ProcessTemplateJob } from "@alf/models/template/process-template-job";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class ProcessTemplateJobSerializer implements Serializer<ProcessTemplateJob> {

    deserialize(data: undefined): undefined
    deserialize(data: any): ProcessTemplateJob
    deserialize(data: any): ProcessTemplateJob | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        copy.parameters = (copy.parameters || []).map(new ProcessTemplateJobParameterSerializer().deserialize);

        return new ProcessTemplateJob(copy);
    }

    serialize(entity: ProcessTemplateJob | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: ProcessTemplateJob, _forceTypeHint?: boolean): any
    serialize(entity: ProcessTemplateJob | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? ProcessTemplateJob.typeNameHint : undefined,
            id: entity.id,
            code: entity.code,
            templateId: entity.templateId,
            stepCode: entity.stepCode,
            stepId: entity.stepId,
            isInherited: entity.isInherited,
            declaredInTemplate: entity.declaredInTemplate,
            canRestore: entity.canRestore,
            ordering: entity.ordering,
            previousCode: entity.previousCode,
            title: entity.title,
            description: entity.description,
            automaticProcessType: entity.automaticProcessType,
            canDelete: entity.canDelete,
            canEdit: entity.canEdit,
            isDeleted: entity.isDeleted,
            parameters: entity.parameters
                ? entity.parameters.map(e => new ProcessTemplateJobParameterSerializer().serialize(e, _forceTypeHint))
                : undefined
        };
    }
}
