import { FinanceTransferHeapStatus } from "@alf/models/transfers/enums/finance-transfer-heap-status";
import { FinanceSystemMetadataSerializer } from "./finance-system-metadata.serializer";
import { FinanceTransferHeapSerializer } from "./finance-transfer-heap.serializer";
import { FinanceTransferHeap } from "@alf/models/transfers/finance-transfer-heap";
import { Serializer } from "@alf/core/models";
import { FinanceTransferHeapEditableFields } from "@alf/models/transfers/finance-transfer-heap-editable-fields";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class FinanceTransferHeapEditableFieldsSerializer implements Serializer<FinanceTransferHeapEditableFields> {

    deserialize(data: undefined): undefined
    deserialize(data: any): FinanceTransferHeapEditableFields
    deserialize(data: any): FinanceTransferHeapEditableFields | undefined {
        if (!data) {
            return undefined;
        }

        if (data.$type === "ALF.Shared.Dto.Models.Transfers.FinanceTransferHeap, ALF.Shared.Dto")
            return new FinanceTransferHeapSerializer().deserialize(data);

        const copy = { ...data };
        copy.status = FinanceTransferHeapStatus[copy.status];

        if (copy.transferred !== undefined)
            copy.transferred = new Date(copy.transferred);

        copy.parameters = new FinanceSystemMetadataSerializer().deserialize(copy.parameters);

        return new FinanceTransferHeapEditableFields(copy);
    }

    serialize(entity: FinanceTransferHeapEditableFields | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: FinanceTransferHeapEditableFields, _forceTypeHint?: boolean): any
    serialize(entity: FinanceTransferHeapEditableFields | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        if (entity.$type === "ALF.Shared.Dto.Models.Transfers.FinanceTransferHeap, ALF.Shared.Dto")
            return new FinanceTransferHeapSerializer().serialize(entity as FinanceTransferHeap, _forceTypeHint);

        return {
            $type: _forceTypeHint ? FinanceTransferHeapEditableFields.typeNameHint : undefined,
            description: entity.description,
            numberOfTransactions: entity.numberOfTransactions,
            userId: entity.userId,
            status: FinanceTransferHeapStatus[entity.status],
            headStatus: entity.headStatus,
            jobStatus: entity.jobStatus,
            waitingForJobId: entity.waitingForJobId,
            transferred: entity.transferred
                ? entity.transferred.toISOString()
                : undefined,
            fileStorageId: entity.fileStorageId,
            headReceipt: entity.headReceipt,
            fileReceipt: entity.fileReceipt,
            parameters: new FinanceSystemMetadataSerializer().serialize(entity.parameters, _forceTypeHint),
            areParametersResolved: entity.areParametersResolved,
            isBeingCreated: entity.isBeingCreated
        };
    }
}
