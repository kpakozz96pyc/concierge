import { RuntimeFieldDataType } from "@alf/models/database-metadata/enums/runtime-field-data-type";
import { Serializer } from "@alf/core/models";
import { JobParameterAvailableValues } from "@alf/models/job-parameters/job-parameter-available-values";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class JobParameterAvailableValuesSerializer implements Serializer<JobParameterAvailableValues> {

    deserialize(data: undefined): undefined
    deserialize(data: any): JobParameterAvailableValues
    deserialize(data: any): JobParameterAvailableValues | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        copy.dataType = RuntimeFieldDataType[copy.dataType];

        return new JobParameterAvailableValues(copy);
    }

    serialize(entity: JobParameterAvailableValues | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: JobParameterAvailableValues, _forceTypeHint?: boolean): any
    serialize(entity: JobParameterAvailableValues | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: entity.$type,
            providesCompanyContext: entity.providesCompanyContext,
            needsCompanyContext: entity.needsCompanyContext,
            linkType: entity.linkType,
            linkReference: entity.linkReference,
            multiple: entity.multiple,
            dataType: RuntimeFieldDataType[entity.dataType],
            name: entity.name
        };
    }
}
