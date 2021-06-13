import { Serializer } from "@alf/core/models";
import { GrantExtraField } from "@alf/models/data-access/grant-extra-field";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class GrantExtraFieldSerializer implements Serializer<GrantExtraField> {

    deserialize(data: undefined): undefined
    deserialize(data: any): GrantExtraField
    deserialize(data: any): GrantExtraField | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };

        return new GrantExtraField(copy);
    }

    serialize(entity: GrantExtraField | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: GrantExtraField, _forceTypeHint?: boolean): any
    serialize(entity: GrantExtraField | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? GrantExtraField.typeNameHint : undefined,
            grantId: entity.grantId,
            tableNumber: entity.tableNumber,
            fieldNumber: entity.fieldNumber
        };
    }
}
