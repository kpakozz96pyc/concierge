import { Serializer } from "@alf/core/models";
import { GlobalFilterExtendedInformation } from "@alf/models/extended-information/global-filter-extended-information";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class GlobalFilterExtendedInformationSerializer implements Serializer<GlobalFilterExtendedInformation> {

    deserialize(data: undefined): undefined
    deserialize(data: any): GlobalFilterExtendedInformation
    deserialize(data: any): GlobalFilterExtendedInformation | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };

        return new GlobalFilterExtendedInformation(copy);
    }

    serialize(entity: GlobalFilterExtendedInformation | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: GlobalFilterExtendedInformation, _forceTypeHint?: boolean): any
    serialize(entity: GlobalFilterExtendedInformation | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? GlobalFilterExtendedInformation.typeNameHint : undefined,
            description: entity.description
        };
    }
}
