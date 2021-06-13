import { MetaJobParameterResolveRuleSerializer } from "../parameters/meta-job-parameter-resolve-rule.serializer";
import { Serializer } from "@alf/core/models";
import { ProcessTemplateJobParameter } from "@alf/models/template/process-template-job-parameter";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class ProcessTemplateJobParameterSerializer implements Serializer<ProcessTemplateJobParameter> {

    deserialize(data: undefined): undefined
    deserialize(data: any): ProcessTemplateJobParameter
    deserialize(data: any): ProcessTemplateJobParameter | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        copy.resolveRule = new MetaJobParameterResolveRuleSerializer().deserialize(copy.resolveRule);

        return new ProcessTemplateJobParameter(copy);
    }

    serialize(entity: ProcessTemplateJobParameter | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: ProcessTemplateJobParameter, _forceTypeHint?: boolean): any
    serialize(entity: ProcessTemplateJobParameter | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? ProcessTemplateJobParameter.typeNameHint : undefined,
            id: entity.id,
            code: entity.code,
            templateId: entity.templateId,
            jobCode: entity.jobCode,
            parameterId: entity.parameterId,
            resolveRule: new MetaJobParameterResolveRuleSerializer().serialize(entity.resolveRule, _forceTypeHint)
        };
    }
}
