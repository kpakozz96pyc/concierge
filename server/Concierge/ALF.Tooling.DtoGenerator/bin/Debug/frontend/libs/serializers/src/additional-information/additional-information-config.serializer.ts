import { AdditionalInformationConfigParameterSerializer } from "./additional-information-config-parameter.serializer";
import { AdditionalInformationConfigSubTypeSerializer } from "./additional-information-config-sub-type.serializer";
import { Serializer } from "@alf/core/models";
import { AdditionalInformationConfig } from "@alf/models/additional-information/additional-information-config";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class AdditionalInformationConfigSerializer implements Serializer<AdditionalInformationConfig> {

    deserialize(data: undefined): undefined
    deserialize(data: any): AdditionalInformationConfig
    deserialize(data: any): AdditionalInformationConfig | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        copy.parameters = (copy.parameters || []).map(new AdditionalInformationConfigParameterSerializer().deserialize);

        copy.subTypes = (copy.subTypes || []).map(new AdditionalInformationConfigSubTypeSerializer().deserialize);

        return new AdditionalInformationConfig(copy);
    }

    serialize(entity: AdditionalInformationConfig | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: AdditionalInformationConfig, _forceTypeHint?: boolean): any
    serialize(entity: AdditionalInformationConfig | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? AdditionalInformationConfig.typeNameHint : undefined,
            id: entity.id,
            code: entity.code,
            description: entity.description,
            parameters: entity.parameters
                ? entity.parameters.map(e => new AdditionalInformationConfigParameterSerializer().serialize(e, _forceTypeHint))
                : undefined,
            subTypes: entity.subTypes
                ? entity.subTypes.map(e => new AdditionalInformationConfigSubTypeSerializer().serialize(e, _forceTypeHint))
                : undefined
        };
    }
}
