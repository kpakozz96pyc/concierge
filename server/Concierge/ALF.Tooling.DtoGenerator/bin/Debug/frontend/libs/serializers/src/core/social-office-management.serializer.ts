import { SocialOfficeManagementType } from "@alf/models/core/enums/social-office-management-type";
import { Serializer } from "@alf/core/models";
import { SocialOfficeManagement } from "@alf/models/core/social-office-management";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class SocialOfficeManagementSerializer implements Serializer<SocialOfficeManagement> {

    deserialize(data: undefined): undefined
    deserialize(data: any): SocialOfficeManagement
    deserialize(data: any): SocialOfficeManagement | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        copy.type = SocialOfficeManagementType[copy.type];

        return new SocialOfficeManagement(copy);
    }

    serialize(entity: SocialOfficeManagement | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: SocialOfficeManagement, _forceTypeHint?: boolean): any
    serialize(entity: SocialOfficeManagement | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? SocialOfficeManagement.typeNameHint : undefined,
            id: entity.id,
            companyId: entity.companyId,
            code: entity.code,
            name: entity.name,
            location: entity.location,
            address: entity.address,
            countryCode: entity.countryCode,
            postalCode: entity.postalCode,
            type: SocialOfficeManagementType[entity.type]
        };
    }
}
