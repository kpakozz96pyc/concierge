import { Serializer } from "@alf/core/models";
import { GrantGroupExtendedInformation } from "@alf/models/extended-information/grant-group-extended-information";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class GrantGroupExtendedInformationSerializer implements Serializer<GrantGroupExtendedInformation> {

    deserialize(data: undefined): undefined
    deserialize(data: any): GrantGroupExtendedInformation
    deserialize(data: any): GrantGroupExtendedInformation | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };

        return new GrantGroupExtendedInformation(copy);
    }

    serialize(entity: GrantGroupExtendedInformation | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: GrantGroupExtendedInformation, _forceTypeHint?: boolean): any
    serialize(entity: GrantGroupExtendedInformation | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? GrantGroupExtendedInformation.typeNameHint : undefined,
            isSystemShipped: entity.isSystemShipped,
            isEnabled: entity.isEnabled
        };
    }
}
