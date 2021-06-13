import { Serializer } from "@alf/core/models";
import { FinanceTransferHeapAction } from "@alf/models/transfers/finance-transfer-heap-action";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class FinanceTransferHeapActionSerializer implements Serializer<FinanceTransferHeapAction> {

    deserialize(data: undefined): undefined
    deserialize(data: any): FinanceTransferHeapAction
    deserialize(data: any): FinanceTransferHeapAction | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        copy.performedAt = new Date(copy.performedAt);

        return new FinanceTransferHeapAction(copy);
    }

    serialize(entity: FinanceTransferHeapAction | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: FinanceTransferHeapAction, _forceTypeHint?: boolean): any
    serialize(entity: FinanceTransferHeapAction | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? FinanceTransferHeapAction.typeNameHint : undefined,
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
