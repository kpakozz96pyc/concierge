import { Serializer } from "@alf/core/models";
import { RetroPayDelta } from "@alf/models/retro-pay/retro-pay-delta";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class RetroPayDeltaSerializer implements Serializer<RetroPayDelta> {

    deserialize(data: undefined): undefined
    deserialize(data: any): RetroPayDelta
    deserialize(data: any): RetroPayDelta | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        if (copy.processedAt !== undefined)
            copy.processedAt = new Date(copy.processedAt);

        return new RetroPayDelta(copy);
    }

    serialize(entity: RetroPayDelta | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: RetroPayDelta, _forceTypeHint?: boolean): any
    serialize(entity: RetroPayDelta | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? RetroPayDelta.typeNameHint : undefined,
            id: entity.id,
            code: entity.code,
            chainId: entity.chainId,
            companyId: entity.companyId,
            periodNumber: entity.periodNumber,
            employeeNumber: entity.employeeNumber,
            retroPaySnapshotId: entity.retroPaySnapshotId,
            retroPayTransactionId: entity.retroPayTransactionId,
            retroPayRunEmployeeId: entity.retroPayRunEmployeeId,
            projectedStatus: entity.projectedStatus,
            periodId: entity.periodId,
            retroPaySnapId: entity.retroPaySnapId,
            amount: entity.amount,
            payCode: entity.payCode,
            retroPayId: entity.retroPayId,
            retroPayRunId: entity.retroPayRunId,
            processedAt: entity.processedAt
                ? entity.processedAt.toISOString()
                : undefined,
            processedPeriodId: entity.processedPeriodId,
            processedBy: entity.processedBy
        };
    }
}
