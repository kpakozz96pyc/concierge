import { JobParameterStaticEnumOptionSerializer } from "./job-parameter-static-enum-option.serializer";
import { Serializer } from "@alf/core/models";
import { JobParameterStaticEnum } from "@alf/models/job-parameters/job-parameter-static-enum";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class JobParameterStaticEnumSerializer implements Serializer<JobParameterStaticEnum> {

    deserialize(data: undefined): undefined
    deserialize(data: any): JobParameterStaticEnum
    deserialize(data: any): JobParameterStaticEnum | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        copy.options = (copy.options || []).map(new JobParameterStaticEnumOptionSerializer().deserialize);

        return new JobParameterStaticEnum(copy);
    }

    serialize(entity: JobParameterStaticEnum | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: JobParameterStaticEnum, _forceTypeHint?: boolean): any
    serialize(entity: JobParameterStaticEnum | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: entity.$type,
            options: entity.options
                ? entity.options.map(e => new JobParameterStaticEnumOptionSerializer().serialize(e, _forceTypeHint))
                : undefined,
            multiple: entity.multiple,
            name: entity.name
        };
    }
}
