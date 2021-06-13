import { ParameterType } from "@alf/models/database-metadata/enums/parameter-type";
import { Serializer } from "@alf/core/models";
import { AdditionalInformationConfigParameter } from "@alf/models/additional-information/additional-information-config-parameter";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class AdditionalInformationConfigParameterSerializer implements Serializer<AdditionalInformationConfigParameter> {

    deserialize(data: undefined): undefined
    deserialize(data: any): AdditionalInformationConfigParameter
    deserialize(data: any): AdditionalInformationConfigParameter | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        copy.parameterType = ParameterType[copy.parameterType];

        return new AdditionalInformationConfigParameter(copy);
    }

    serialize(entity: AdditionalInformationConfigParameter | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: AdditionalInformationConfigParameter, _forceTypeHint?: boolean): any
    serialize(entity: AdditionalInformationConfigParameter | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? AdditionalInformationConfigParameter.typeNameHint : undefined,
            parameterType: ParameterType[entity.parameterType],
            totalLength: entity.totalLength,
            decimalPlaces: entity.decimalPlaces,
            lookupKey: entity.lookupKey,
            displayName: entity.displayName,
            lookupId: entity.lookupId,
            canGetValueFromCar: entity.canGetValueFromCar
        };
    }
}
