import { Serializer } from "@alf/core/models";
import { BankTransferHeapAction } from "@alf/models/transfers/bank-transfer-heap-action";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class BankTransferHeapActionSerializer implements Serializer<BankTransferHeapAction> {

    deserialize(data: undefined): undefined
    deserialize(data: any): BankTransferHeapAction
    deserialize(data: any): BankTransferHeapAction | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        copy.performedAt = new Date(copy.performedAt);

        return new BankTransferHeapAction(copy);
    }

    serialize(entity: BankTransferHeapAction | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: BankTransferHeapAction, _forceTypeHint?: boolean): any
    serialize(entity: BankTransferHeapAction | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? BankTransferHeapAction.typeNameHint : undefined,
            actionType: entity.actionType,
            performedAt: entity.performedAt
                ? entity.performedAt.toISOString()
                : undefined,
            performedByUserId: entity.performedByUserId,
            performedByUsername: entity.performedByUsername,
            details: entity.details,
            fileDownloadTicketId: entity.fileDownloadTicketId
        };
    }
}
