import { MetaJobParameterResolveRuleSerializer } from "../parameters/meta-job-parameter-resolve-rule.serializer";
import { Serializer } from "@alf/core/models";
import { ProcessTemplateJobScheduleJobParameter } from "@alf/models/template/process-template-job-schedule-job-parameter";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class ProcessTemplateJobScheduleJobParameterSerializer implements Serializer<ProcessTemplateJobScheduleJobParameter> {

    deserialize(data: undefined): undefined
    deserialize(data: any): ProcessTemplateJobScheduleJobParameter
    deserialize(data: any): ProcessTemplateJobScheduleJobParameter | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        copy.resolveRule = new MetaJobParameterResolveRuleSerializer().deserialize(copy.resolveRule);

        return new ProcessTemplateJobScheduleJobParameter(copy);
    }

    serialize(entity: ProcessTemplateJobScheduleJobParameter | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: ProcessTemplateJobScheduleJobParameter, _forceTypeHint?: boolean): any
    serialize(entity: ProcessTemplateJobScheduleJobParameter | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? ProcessTemplateJobScheduleJobParameter.typeNameHint : undefined,
            id: entity.id,
            code: entity.code,
            templateId: entity.templateId,
            jobScheduleJobCode: entity.jobScheduleJobCode,
            parameterId: entity.parameterId,
            resolveRule: new MetaJobParameterResolveRuleSerializer().serialize(entity.resolveRule, _forceTypeHint)
        };
    }
}
