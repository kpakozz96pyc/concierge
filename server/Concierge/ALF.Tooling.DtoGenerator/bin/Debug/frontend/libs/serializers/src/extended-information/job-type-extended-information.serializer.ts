import { JobParameterSerializer } from "../job-parameters/job-parameter.serializer";
import { Serializer } from "@alf/core/models";
import { JobTypeExtendedInformation } from "@alf/models/extended-information/job-type-extended-information";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class JobTypeExtendedInformationSerializer implements Serializer<JobTypeExtendedInformation> {

    deserialize(data: undefined): undefined
    deserialize(data: any): JobTypeExtendedInformation
    deserialize(data: any): JobTypeExtendedInformation | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        copy.jobParameters = (copy.jobParameters || []).map(new JobParameterSerializer().deserialize);

        return new JobTypeExtendedInformation(copy);
    }

    serialize(entity: JobTypeExtendedInformation | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: JobTypeExtendedInformation, _forceTypeHint?: boolean): any
    serialize(entity: JobTypeExtendedInformation | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? JobTypeExtendedInformation.typeNameHint : undefined,
            jobParameters: entity.jobParameters
                ? entity.jobParameters.map(e => new JobParameterSerializer().serialize(e, _forceTypeHint))
                : undefined
        };
    }
}
