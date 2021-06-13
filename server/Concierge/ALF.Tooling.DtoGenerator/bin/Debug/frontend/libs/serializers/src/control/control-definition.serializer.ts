import { ControlTypeCategory } from "@alf/models/control/enums/control-type-category";
import { InputParameterSerializer } from "../input-parameters/input-parameter.serializer";
import { Serializer } from "@alf/core/models";
import { ControlDefinition } from "@alf/models/control/control-definition";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class ControlDefinitionSerializer implements Serializer<ControlDefinition> {

    deserialize(data: undefined): undefined
    deserialize(data: any): ControlDefinition
    deserialize(data: any): ControlDefinition | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        copy.categories = (copy.categories || []).map((item: any) => ControlTypeCategory[item]);

        copy.parameters = (copy.parameters || []).map(new InputParameterSerializer().deserialize);

        copy.filters = (copy.filters || []).map(new InputParameterSerializer().deserialize);

        return new ControlDefinition(copy);
    }

    serialize(entity: ControlDefinition | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: ControlDefinition, _forceTypeHint?: boolean): any
    serialize(entity: ControlDefinition | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? ControlDefinition.typeNameHint : undefined,
            id: entity.id,
            controlId: entity.controlId,
            systemShipped: entity.systemShipped,
            activationLocked: entity.activationLocked,
            controlTypeId: entity.controlTypeId,
            controlTypeCode: entity.controlTypeCode,
            categories: entity.categories
                ? entity.categories.map(item => ControlTypeCategory[item])
                : undefined,
            isDeleted: entity.isDeleted,
            name: entity.name,
            description: entity.description,
            canOverrideActivationForCompany: entity.canOverrideActivationForCompany,
            active: entity.active,
            warningFromPeriodState: entity.warningFromPeriodState,
            errorFromPeriodState: entity.errorFromPeriodState,
            infoFromPeriodState: entity.infoFromPeriodState,
            parameters: entity.parameters
                ? entity.parameters.map(e => new InputParameterSerializer().serialize(e, _forceTypeHint))
                : undefined,
            filters: entity.filters
                ? entity.filters.map(e => new InputParameterSerializer().serialize(e, _forceTypeHint))
                : undefined,
            activeForPeriodTypes: entity.activeForPeriodTypes
        };
    }
}
