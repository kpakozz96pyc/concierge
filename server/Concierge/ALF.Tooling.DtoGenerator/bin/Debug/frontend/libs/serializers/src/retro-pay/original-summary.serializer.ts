import { Serializer } from "@alf/core/models";
import { OriginalSummary } from "@alf/models/retro-pay/original-summary";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class OriginalSummarySerializer implements Serializer<OriginalSummary> {

    deserialize(data: undefined): undefined
    deserialize(data: any): OriginalSummary
    deserialize(data: any): OriginalSummary | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };

        return new OriginalSummary(copy);
    }

    serialize(entity: OriginalSummary | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: OriginalSummary, _forceTypeHint?: boolean): any
    serialize(entity: OriginalSummary | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? OriginalSummary.typeNameHint : undefined,
            transactionId: entity.transactionId,
            periodId: entity.periodId,
            amount: entity.amount
        };
    }
}
