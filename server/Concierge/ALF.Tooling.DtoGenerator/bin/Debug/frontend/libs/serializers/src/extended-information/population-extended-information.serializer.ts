import { Serializer } from "@alf/core/models";
import { PopulationExtendedInformation } from "@alf/models/extended-information/population-extended-information";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class PopulationExtendedInformationSerializer implements Serializer<PopulationExtendedInformation> {

    deserialize(data: undefined): undefined
    deserialize(data: any): PopulationExtendedInformation
    deserialize(data: any): PopulationExtendedInformation | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };

        return new PopulationExtendedInformation(copy);
    }

    serialize(entity: PopulationExtendedInformation | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: PopulationExtendedInformation, _forceTypeHint?: boolean): any
    serialize(entity: PopulationExtendedInformation | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? PopulationExtendedInformation.typeNameHint : undefined,
            populationType: entity.populationType,
            isSystemShipped: entity.isSystemShipped
        };
    }
}
