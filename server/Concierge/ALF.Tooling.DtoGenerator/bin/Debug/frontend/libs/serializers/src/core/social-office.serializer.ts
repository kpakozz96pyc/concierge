import { serializeDate } from "@alf/core";
import { Serializer } from "@alf/core/models";
import { SocialOffice } from "@alf/models/core/social-office";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class SocialOfficeSerializer implements Serializer<SocialOffice> {

    deserialize(data: undefined): undefined
    deserialize(data: any): SocialOffice
    deserialize(data: any): SocialOffice | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        if (copy.validFrom !== undefined)
            copy.validFrom = new Date(copy.validFrom);

        if (copy.validTo !== undefined)
            copy.validTo = new Date(copy.validTo);

        return new SocialOffice(copy);
    }

    serialize(entity: SocialOffice | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: SocialOffice, _forceTypeHint?: boolean): any
    serialize(entity: SocialOffice | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? SocialOffice.typeNameHint : undefined,
            id: entity.id,
            companyId: entity.companyId,
            code: entity.code,
            name: entity.name,
            address: entity.address,
            postalAddress: entity.postalAddress,
            countryCode: entity.countryCode,
            postalCode: entity.postalCode,
            managementOffice: entity.managementOffice,
            municipalityCode: entity.municipalityCode,
            validFrom: serializeDate(entity.validFrom),
            validTo: serializeDate(entity.validTo),
            replacedWith: entity.replacedWith,
            phoneNumber: entity.phoneNumber,
            contactInformation: entity.contactInformation
        };
    }
}
