import { Serializer } from "@alf/core/models";
import { DeleteAction } from "@alf/models/import/delete-action";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class DeleteActionSerializer implements Serializer<DeleteAction> {

    deserialize(data: undefined): undefined
    deserialize(data: any): DeleteAction
    deserialize(data: any): DeleteAction | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };

        return new DeleteAction(copy);
    }

    serialize(entity: DeleteAction | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: DeleteAction, _forceTypeHint?: boolean): any
    serialize(entity: DeleteAction | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: entity.$type,
            variableTransactionImportHeapId: entity.variableTransactionImportHeapId,
            transactionIds: entity.transactionIds
        };
    }
}
