import { Serializer } from "@alf/core/models";
import { SystemParameterRetroPayCategory } from "@alf/models/system-parameters/system-parameter-retro-pay-category";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class SystemParameterRetroPayCategorySerializer implements Serializer<SystemParameterRetroPayCategory> {

    deserialize(data: undefined): undefined
    deserialize(data: any): SystemParameterRetroPayCategory
    deserialize(data: any): SystemParameterRetroPayCategory | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };

        return new SystemParameterRetroPayCategory(copy);
    }

    serialize(entity: SystemParameterRetroPayCategory | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: SystemParameterRetroPayCategory, _forceTypeHint?: boolean): any
    serialize(entity: SystemParameterRetroPayCategory | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: entity.$type,
            numberOfMonthsBackToRetroPay: entity.numberOfMonthsBackToRetroPay,
            id: entity.id,
            code: entity.code,
            description: entity.description
        };
    }
}
