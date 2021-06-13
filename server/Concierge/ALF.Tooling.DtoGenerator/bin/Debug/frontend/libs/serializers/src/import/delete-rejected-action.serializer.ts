import { Serializer } from "@alf/core/models";
import { DeleteRejectedAction } from "@alf/models/import/delete-rejected-action";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class DeleteRejectedActionSerializer implements Serializer<DeleteRejectedAction> {

    deserialize(data: undefined): undefined
    deserialize(data: any): DeleteRejectedAction
    deserialize(data: any): DeleteRejectedAction | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };

        return new DeleteRejectedAction(copy);
    }

    serialize(entity: DeleteRejectedAction | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: DeleteRejectedAction, _forceTypeHint?: boolean): any
    serialize(entity: DeleteRejectedAction | undefined, _forceTypeHint?: boolean): any | undefined {
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
