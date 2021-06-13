import { Serializer } from "@alf/core/models";
import { PendingRetroPayDeltaStatusCounts } from "@alf/models/retro-pay/pending-retro-pay-delta-status-counts";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class PendingRetroPayDeltaStatusCountsSerializer implements Serializer<PendingRetroPayDeltaStatusCounts> {

    deserialize(data: undefined): undefined
    deserialize(data: any): PendingRetroPayDeltaStatusCounts
    deserialize(data: any): PendingRetroPayDeltaStatusCounts | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };

        return new PendingRetroPayDeltaStatusCounts(copy);
    }

    serialize(entity: PendingRetroPayDeltaStatusCounts | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: PendingRetroPayDeltaStatusCounts, _forceTypeHint?: boolean): any
    serialize(entity: PendingRetroPayDeltaStatusCounts | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? PendingRetroPayDeltaStatusCounts.typeNameHint : undefined,
            total: entity.total,
            untreated: entity.untreated,
            toBePaid: entity.toBePaid,
            toBeIgnored: entity.toBeIgnored
        };
    }
}
