import { Serializer } from "@alf/core/models";
import { PendingRetroPayCandidatesAmountSums } from "@alf/models/retro-pay/pending-retro-pay-candidates-amount-sums";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class PendingRetroPayCandidatesAmountSumsSerializer implements Serializer<PendingRetroPayCandidatesAmountSums> {

    deserialize(data: undefined): undefined
    deserialize(data: any): PendingRetroPayCandidatesAmountSums
    deserialize(data: any): PendingRetroPayCandidatesAmountSums | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };

        return new PendingRetroPayCandidatesAmountSums(copy);
    }

    serialize(entity: PendingRetroPayCandidatesAmountSums | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: PendingRetroPayCandidatesAmountSums, _forceTypeHint?: boolean): any
    serialize(entity: PendingRetroPayCandidatesAmountSums | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? PendingRetroPayCandidatesAmountSums.typeNameHint : undefined,
            total: entity.total,
            untreated: entity.untreated,
            toBePaid: entity.toBePaid,
            toBeIgnored: entity.toBeIgnored
        };
    }
}
