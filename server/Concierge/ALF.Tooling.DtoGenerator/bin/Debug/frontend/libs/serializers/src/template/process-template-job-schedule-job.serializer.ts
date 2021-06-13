import { ProcessTemplateJobScheduleJobParameterSerializer } from "./process-template-job-schedule-job-parameter.serializer";
import { Serializer } from "@alf/core/models";
import { ProcessTemplateJobScheduleJob } from "@alf/models/template/process-template-job-schedule-job";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class ProcessTemplateJobScheduleJobSerializer implements Serializer<ProcessTemplateJobScheduleJob> {

    deserialize(data: undefined): undefined
    deserialize(data: any): ProcessTemplateJobScheduleJob
    deserialize(data: any): ProcessTemplateJobScheduleJob | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        copy.parameters = (copy.parameters || []).map(new ProcessTemplateJobScheduleJobParameterSerializer().deserialize);

        return new ProcessTemplateJobScheduleJob(copy);
    }

    serialize(entity: ProcessTemplateJobScheduleJob | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: ProcessTemplateJobScheduleJob, _forceTypeHint?: boolean): any
    serialize(entity: ProcessTemplateJobScheduleJob | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? ProcessTemplateJobScheduleJob.typeNameHint : undefined,
            id: entity.id,
            code: entity.code,
            templateId: entity.templateId,
            jobScheduleCode: entity.jobScheduleCode,
            title: entity.title,
            description: entity.description,
            automaticProcessType: entity.automaticProcessType,
            parameters: entity.parameters
                ? entity.parameters.map(e => new ProcessTemplateJobScheduleJobParameterSerializer().serialize(e, _forceTypeHint))
                : undefined
        };
    }
}
