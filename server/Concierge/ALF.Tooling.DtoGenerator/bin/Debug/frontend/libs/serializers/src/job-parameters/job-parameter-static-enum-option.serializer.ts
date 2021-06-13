import { Serializer } from "@alf/core/models";
import { JobParameterStaticEnumOption } from "@alf/models/job-parameters/job-parameter-static-enum-option";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class JobParameterStaticEnumOptionSerializer implements Serializer<JobParameterStaticEnumOption> {

    deserialize(data: undefined): undefined
    deserialize(data: any): JobParameterStaticEnumOption
    deserialize(data: any): JobParameterStaticEnumOption | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };

        return new JobParameterStaticEnumOption(copy);
    }

    serialize(entity: JobParameterStaticEnumOption | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: JobParameterStaticEnumOption, _forceTypeHint?: boolean): any
    serialize(entity: JobParameterStaticEnumOption | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? JobParameterStaticEnumOption.typeNameHint : undefined,
            value: entity.value,
            label: entity.label
        };
    }
}
