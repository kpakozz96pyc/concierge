import { AdditionalInformationParameterSerializer } from "./additional-information-parameter.serializer";
import { Serializer } from "@alf/core/models";
import { AdditionalInformation } from "@alf/models/additional-information/additional-information";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class AdditionalInformationSerializer implements Serializer<AdditionalInformation> {

    deserialize(data: undefined): undefined
    deserialize(data: any): AdditionalInformation
    deserialize(data: any): AdditionalInformation | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        copy.specifications = (copy.specifications || []).map(new AdditionalInformationParameterSerializer().deserialize);

        return new AdditionalInformation(copy);
    }

    serialize(entity: AdditionalInformation | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: AdditionalInformation, _forceTypeHint?: boolean): any
    serialize(entity: AdditionalInformation | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? AdditionalInformation.typeNameHint : undefined,
            subType: entity.subType,
            version: entity.version,
            specifications: entity.specifications
                ? entity.specifications.map(e => new AdditionalInformationParameterSerializer().serialize(e, _forceTypeHint))
                : undefined
        };
    }
}
