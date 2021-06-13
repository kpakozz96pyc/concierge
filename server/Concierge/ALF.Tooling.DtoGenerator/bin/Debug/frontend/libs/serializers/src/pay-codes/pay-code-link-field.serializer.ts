import { Serializer } from "@alf/core/models";
import { PayCodeLinkField } from "@alf/models/pay-codes/pay-code-link-field";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class PayCodeLinkFieldSerializer implements Serializer<PayCodeLinkField> {

    deserialize(data: undefined): undefined
    deserialize(data: any): PayCodeLinkField
    deserialize(data: any): PayCodeLinkField | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };

        return new PayCodeLinkField(copy);
    }

    serialize(entity: PayCodeLinkField | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: PayCodeLinkField, _forceTypeHint?: boolean): any
    serialize(entity: PayCodeLinkField | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? PayCodeLinkField.typeNameHint : undefined,
            field: entity.field,
            defaultValue: entity.defaultValue,
            inheritedField: entity.inheritedField,
            isCalculated: entity.isCalculated,
            shouldTriggerOnce: entity.shouldTriggerOnce
        };
    }
}
