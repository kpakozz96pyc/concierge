import { Serializer } from "@alf/core/models";
import { DeductionOwnerKIDNumber } from "@alf/models/core/deduction-owner-kidnumber";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class DeductionOwnerKIDNumberSerializer implements Serializer<DeductionOwnerKIDNumber> {

    deserialize(data: undefined): undefined
    deserialize(data: any): DeductionOwnerKIDNumber
    deserialize(data: any): DeductionOwnerKIDNumber | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };

        return new DeductionOwnerKIDNumber(copy);
    }

    serialize(entity: DeductionOwnerKIDNumber | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: DeductionOwnerKIDNumber, _forceTypeHint?: boolean): any
    serialize(entity: DeductionOwnerKIDNumber | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? DeductionOwnerKIDNumber.typeNameHint : undefined,
            companyId: entity.companyId,
            kid: entity.kid
        };
    }
}
