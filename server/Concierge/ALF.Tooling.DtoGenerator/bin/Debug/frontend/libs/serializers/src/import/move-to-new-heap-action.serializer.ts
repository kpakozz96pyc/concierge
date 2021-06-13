import { Serializer } from "@alf/core/models";
import { MoveToNewHeapAction } from "@alf/models/import/move-to-new-heap-action";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class MoveToNewHeapActionSerializer implements Serializer<MoveToNewHeapAction> {

    deserialize(data: undefined): undefined
    deserialize(data: any): MoveToNewHeapAction
    deserialize(data: any): MoveToNewHeapAction | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };

        return new MoveToNewHeapAction(copy);
    }

    serialize(entity: MoveToNewHeapAction | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: MoveToNewHeapAction, _forceTypeHint?: boolean): any
    serialize(entity: MoveToNewHeapAction | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: entity.$type,
            periodId: entity.periodId,
            variableTransactionImportHeapId: entity.variableTransactionImportHeapId,
            transactionIds: entity.transactionIds
        };
    }
}
