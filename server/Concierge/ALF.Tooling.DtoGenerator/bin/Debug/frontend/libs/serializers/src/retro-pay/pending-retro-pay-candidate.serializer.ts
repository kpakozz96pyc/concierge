import { Serializer } from "@alf/core/models";
import { PendingRetroPayCandidate } from "@alf/models/retro-pay/pending-retro-pay-candidate";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class PendingRetroPayCandidateSerializer implements Serializer<PendingRetroPayCandidate> {

    deserialize(data: undefined): undefined
    deserialize(data: any): PendingRetroPayCandidate
    deserialize(data: any): PendingRetroPayCandidate | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        copy.calculatedAt = new Date(copy.calculatedAt);

        return new PendingRetroPayCandidate(copy);
    }

    serialize(entity: PendingRetroPayCandidate | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: PendingRetroPayCandidate, _forceTypeHint?: boolean): any
    serialize(entity: PendingRetroPayCandidate | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? PendingRetroPayCandidate.typeNameHint : undefined,
            id: entity.id,
            companyId: entity.companyId,
            employeeId: entity.employeeId,
            periodId: entity.periodId,
            payCodeId: entity.payCodeId,
            amount: entity.amount,
            status: entity.status,
            calculatedAt: entity.calculatedAt
                ? entity.calculatedAt.toISOString()
                : undefined
        };
    }
}
