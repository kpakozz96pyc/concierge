import { Serializer } from "@alf/core/models";
import { AdditionalInformationConfigSubType } from "@alf/models/additional-information/additional-information-config-sub-type";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class AdditionalInformationConfigSubTypeSerializer implements Serializer<AdditionalInformationConfigSubType> {

    deserialize(data: undefined): undefined
    deserialize(data: any): AdditionalInformationConfigSubType
    deserialize(data: any): AdditionalInformationConfigSubType | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };

        return new AdditionalInformationConfigSubType(copy);
    }

    serialize(entity: AdditionalInformationConfigSubType | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: AdditionalInformationConfigSubType, _forceTypeHint?: boolean): any
    serialize(entity: AdditionalInformationConfigSubType | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? AdditionalInformationConfigSubType.typeNameHint : undefined,
            id: entity.id,
            description: entity.description,
            parameterIds: entity.parameterIds
        };
    }
}
