import { serializeDate } from "@alf/core";
import { Serializer } from "@alf/core/models";
import { Municipality } from "@alf/models/core/municipality";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class MunicipalitySerializer implements Serializer<Municipality> {

    deserialize(data: undefined): undefined
    deserialize(data: any): Municipality
    deserialize(data: any): Municipality | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        if (copy.created !== undefined)
            copy.created = new Date(copy.created);

        if (copy.terminated !== undefined)
            copy.terminated = new Date(copy.terminated);

        return new Municipality(copy);
    }

    serialize(entity: Municipality | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: Municipality, _forceTypeHint?: boolean): any
    serialize(entity: Municipality | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? Municipality.typeNameHint : undefined,
            id: entity.id,
            code: entity.code,
            name: entity.name,
            address: entity.address,
            countryCode: entity.countryCode,
            postalCode: entity.postalCode,
            employersTaxZone: entity.employersTaxZone,
            taxationOffice: entity.taxationOffice,
            accountNumber: entity.accountNumber,
            created: serializeDate(entity.created),
            terminated: serializeDate(entity.terminated)
        };
    }
}
