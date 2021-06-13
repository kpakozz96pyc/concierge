import { PendingRetroPayDeltaStatusCountsSerializer } from "./pending-retro-pay-delta-status-counts.serializer";
import { PendingRetroPayCandidatesAmountSumsSerializer } from "./pending-retro-pay-candidates-amount-sums.serializer";
import { Serializer } from "@alf/core/models";
import { PendingRetroPay } from "@alf/models/retro-pay/pending-retro-pay";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class PendingRetroPaySerializer implements Serializer<PendingRetroPay> {

    deserialize(data: undefined): undefined
    deserialize(data: any): PendingRetroPay
    deserialize(data: any): PendingRetroPay | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        copy.createdAt = new Date(copy.createdAt);

        copy.statusCounts = new PendingRetroPayDeltaStatusCountsSerializer().deserialize(copy.statusCounts);

        copy.amountSums = new PendingRetroPayCandidatesAmountSumsSerializer().deserialize(copy.amountSums);

        return new PendingRetroPay(copy);
    }

    serialize(entity: PendingRetroPay | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: PendingRetroPay, _forceTypeHint?: boolean): any
    serialize(entity: PendingRetroPay | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? PendingRetroPay.typeNameHint : undefined,
            id: entity.id,
            companyId: entity.companyId,
            createdAt: entity.createdAt
                ? entity.createdAt.toISOString()
                : undefined,
            statusCounts: new PendingRetroPayDeltaStatusCountsSerializer().serialize(entity.statusCounts, _forceTypeHint),
            amountSums: new PendingRetroPayCandidatesAmountSumsSerializer().serialize(entity.amountSums, _forceTypeHint),
            candidates: entity.candidates
        };
    }
}
