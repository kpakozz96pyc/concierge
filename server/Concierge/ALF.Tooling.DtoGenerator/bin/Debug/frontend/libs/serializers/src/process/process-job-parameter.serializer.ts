import { Serializer } from "@alf/core/models";
import { ProcessJobParameter } from "@alf/models/process/process-job-parameter";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class ProcessJobParameterSerializer implements Serializer<ProcessJobParameter> {

    deserialize(data: undefined): undefined
    deserialize(data: any): ProcessJobParameter
    deserialize(data: any): ProcessJobParameter | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };

        return new ProcessJobParameter(copy);
    }

    serialize(entity: ProcessJobParameter | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: ProcessJobParameter, _forceTypeHint?: boolean): any
    serialize(entity: ProcessJobParameter | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? ProcessJobParameter.typeNameHint : undefined,
            id: entity.id,
            companyId: entity.companyId,
            processPlanId: entity.processPlanId,
            jobId: entity.jobId,
            parameterId: entity.parameterId,
            templateId: entity.templateId,
            resolveRule: entity.resolveRule
        };
    }
}
