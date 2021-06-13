import { Serializer } from "@alf/core/models";
import { ProcessField } from "@alf/models/data-access/process-field";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class ProcessFieldSerializer implements Serializer<ProcessField> {

    deserialize(data: undefined): undefined
    deserialize(data: any): ProcessField
    deserialize(data: any): ProcessField | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };

        return new ProcessField(copy);
    }

    serialize(entity: ProcessField | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: ProcessField, _forceTypeHint?: boolean): any
    serialize(entity: ProcessField | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? ProcessField.typeNameHint : undefined,
            processId: entity.processId,
            tableNumber: entity.tableNumber,
            fieldNumber: entity.fieldNumber,
            fieldMode: entity.fieldMode,
            isRequired: entity.isRequired
        };
    }
}
