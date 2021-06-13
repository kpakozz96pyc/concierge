import { Serializer } from "@alf/core/models";
import { AdditionalInformationParameter } from "@alf/models/additional-information/additional-information-parameter";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class AdditionalInformationParameterSerializer implements Serializer<AdditionalInformationParameter> {

    deserialize(data: undefined): undefined
    deserialize(data: any): AdditionalInformationParameter
    deserialize(data: any): AdditionalInformationParameter | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };

        return initializeDefaultValues(new AdditionalInformationParameter(copy));
    }

    serialize(entity: AdditionalInformationParameter | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: AdditionalInformationParameter, _forceTypeHint?: boolean): any
    serialize(entity: AdditionalInformationParameter | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        entity! = initializeDefaultValues(entity);
        return {
            $type: _forceTypeHint ? AdditionalInformationParameter.typeNameHint : undefined,
            path: entity.path,
            lookupType: entity.lookupType,
            value: entity.value,
            table: entity.table,
            field: entity.field
        };
    }
}

function initializeDefaultValues(value: AdditionalInformationParameter): AdditionalInformationParameter {
    const model = new AdditionalInformationParameter(value);
    ([
        "lookupType",
        "table",
        "field"
    ] as PropertiesOfType<AdditionalInformationParameter, number>[]).forEach(key => model[key] = (model[key] || 0) as never);


    return model;
}
