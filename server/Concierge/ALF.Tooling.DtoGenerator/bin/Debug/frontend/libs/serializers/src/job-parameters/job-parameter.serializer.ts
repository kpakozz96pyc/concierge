import { JobParameterAvailableValuesSerializer } from "./job-parameter-available-values.serializer";
import { JobParameterPrimitiveSerializer } from "./job-parameter-primitive.serializer";
import { JobParameterStaticEnumSerializer } from "./job-parameter-static-enum.serializer";
import { JobParameterAvailableValues } from "@alf/models/job-parameters/job-parameter-available-values";
import { JobParameterPrimitive } from "@alf/models/job-parameters/job-parameter-primitive";
import { JobParameterStaticEnum } from "@alf/models/job-parameters/job-parameter-static-enum";
import { Serializer } from "@alf/core/models";
import { JobParameter } from "@alf/models/job-parameters/job-parameter";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class JobParameterSerializer implements Serializer<JobParameter> {

    deserialize(data: undefined): undefined
    deserialize(data: any): JobParameter
    deserialize(data: any): JobParameter | undefined {
        if (!data) {
            return undefined;
        }

        if (data.$type === "ALF.Shared.Dto.Models.Jobs.JobParameters.JobParameterAvailableValues, ALF.Shared.Dto")
            return new JobParameterAvailableValuesSerializer().deserialize(data);

        if (data.$type === "ALF.Shared.Dto.Models.Jobs.JobParameters.JobParameterPrimitive, ALF.Shared.Dto")
            return new JobParameterPrimitiveSerializer().deserialize(data);

        if (data.$type === "ALF.Shared.Dto.Models.Jobs.JobParameters.JobParameterStaticEnum, ALF.Shared.Dto")
            return new JobParameterStaticEnumSerializer().deserialize(data);

        throw new Error("Unable to deserialize JobParameter, cannot infer type from " + data.$type);
    }

    serialize(entity: JobParameter | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: JobParameter, _forceTypeHint?: boolean): any
    serialize(entity: JobParameter | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        if (entity.$type === "ALF.Shared.Dto.Models.Jobs.JobParameters.JobParameterAvailableValues, ALF.Shared.Dto")
            return new JobParameterAvailableValuesSerializer().serialize(entity as JobParameterAvailableValues, _forceTypeHint);

        if (entity.$type === "ALF.Shared.Dto.Models.Jobs.JobParameters.JobParameterPrimitive, ALF.Shared.Dto")
            return new JobParameterPrimitiveSerializer().serialize(entity as JobParameterPrimitive, _forceTypeHint);

        if (entity.$type === "ALF.Shared.Dto.Models.Jobs.JobParameters.JobParameterStaticEnum, ALF.Shared.Dto")
            return new JobParameterStaticEnumSerializer().serialize(entity as JobParameterStaticEnum, _forceTypeHint);

        throw new Error("Unable to serialize JobParameter, cannot infer type from " + entity.$type);
    }
}
