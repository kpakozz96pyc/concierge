import { Serializer } from "@alf/core/models";
import { ControlDefinitionExtendedInformation } from "@alf/models/extended-information/control-definition-extended-information";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class ControlDefinitionExtendedInformationSerializer implements Serializer<ControlDefinitionExtendedInformation> {

    deserialize(data: undefined): undefined
    deserialize(data: any): ControlDefinitionExtendedInformation
    deserialize(data: any): ControlDefinitionExtendedInformation | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };

        return new ControlDefinitionExtendedInformation(copy);
    }

    serialize(entity: ControlDefinitionExtendedInformation | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: ControlDefinitionExtendedInformation, _forceTypeHint?: boolean): any
    serialize(entity: ControlDefinitionExtendedInformation | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? ControlDefinitionExtendedInformation.typeNameHint : undefined,
            controlTypeId: entity.controlTypeId,
            active: entity.active,
            canOverrideActivationForCompany: entity.canOverrideActivationForCompany,
            isDeleted: entity.isDeleted,
            systemShipped: entity.systemShipped
        };
    }
}
