import { TransactionInfoGroupSerializer } from "./transaction-info-group.serializer";
import { Serializer } from "@alf/core/models";
import { PositionTransactionInfoOverview } from "@alf/models/transactions/position-transaction-info-overview";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class PositionTransactionInfoOverviewSerializer implements Serializer<PositionTransactionInfoOverview> {

    deserialize(data: undefined): undefined
    deserialize(data: any): PositionTransactionInfoOverview
    deserialize(data: any): PositionTransactionInfoOverview | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        copy.transactionInfoGroup = new TransactionInfoGroupSerializer().deserialize(copy.transactionInfoGroup);

        return new PositionTransactionInfoOverview(copy);
    }

    serialize(entity: PositionTransactionInfoOverview | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: PositionTransactionInfoOverview, _forceTypeHint?: boolean): any
    serialize(entity: PositionTransactionInfoOverview | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? PositionTransactionInfoOverview.typeNameHint : undefined,
            id: entity.id,
            positionId: entity.positionId,
            transactionInfoGroup: new TransactionInfoGroupSerializer().serialize(entity.transactionInfoGroup, _forceTypeHint)
        };
    }
}
