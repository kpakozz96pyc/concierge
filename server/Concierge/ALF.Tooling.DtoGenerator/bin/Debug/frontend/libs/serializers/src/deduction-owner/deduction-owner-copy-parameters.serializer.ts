import { Serializer } from "@alf/core/models";
import { DeductionOwnerCopyParameters } from "@alf/models/deduction-owner/deduction-owner-copy-parameters";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class DeductionOwnerCopyParametersSerializer implements Serializer<DeductionOwnerCopyParameters> {

    deserialize(data: undefined): undefined
    deserialize(data: any): DeductionOwnerCopyParameters
    deserialize(data: any): DeductionOwnerCopyParameters | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };

        return new DeductionOwnerCopyParameters(copy);
    }

    serialize(entity: DeductionOwnerCopyParameters | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: DeductionOwnerCopyParameters, _forceTypeHint?: boolean): any
    serialize(entity: DeductionOwnerCopyParameters | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? DeductionOwnerCopyParameters.typeNameHint : undefined,
            copyFromId: entity.copyFromId,
            copyToDeductionOwnerCode: entity.copyToDeductionOwnerCode,
            description: entity.description
        };
    }
}
