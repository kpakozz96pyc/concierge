import { Serializer } from "@alf/core/models";
import { AbsenceCodeCopyParameters } from "@alf/models/absence/absence-code-copy-parameters";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class AbsenceCodeCopyParametersSerializer implements Serializer<AbsenceCodeCopyParameters> {

    deserialize(data: undefined): undefined
    deserialize(data: any): AbsenceCodeCopyParameters
    deserialize(data: any): AbsenceCodeCopyParameters | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };

        return new AbsenceCodeCopyParameters(copy);
    }

    serialize(entity: AbsenceCodeCopyParameters | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: AbsenceCodeCopyParameters, _forceTypeHint?: boolean): any
    serialize(entity: AbsenceCodeCopyParameters | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? AbsenceCodeCopyParameters.typeNameHint : undefined,
            copyFromId: entity.copyFromId,
            copyToAbsenceCodeNumber: entity.copyToAbsenceCodeNumber,
            description: entity.description
        };
    }
}
