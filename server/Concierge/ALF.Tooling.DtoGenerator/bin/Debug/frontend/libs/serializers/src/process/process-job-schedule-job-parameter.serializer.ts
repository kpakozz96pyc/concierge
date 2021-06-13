import { Serializer } from "@alf/core/models";
import { ProcessJobScheduleJobParameter } from "@alf/models/process/process-job-schedule-job-parameter";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class ProcessJobScheduleJobParameterSerializer implements Serializer<ProcessJobScheduleJobParameter> {

    deserialize(data: undefined): undefined
    deserialize(data: any): ProcessJobScheduleJobParameter
    deserialize(data: any): ProcessJobScheduleJobParameter | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };

        return new ProcessJobScheduleJobParameter(copy);
    }

    serialize(entity: ProcessJobScheduleJobParameter | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: ProcessJobScheduleJobParameter, _forceTypeHint?: boolean): any
    serialize(entity: ProcessJobScheduleJobParameter | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? ProcessJobScheduleJobParameter.typeNameHint : undefined,
            id: entity.id,
            companyId: entity.companyId,
            jobScheduleJobId: entity.jobScheduleJobId,
            parameterName: entity.parameterName,
            resolveRule: entity.resolveRule
        };
    }
}
