import { Serializer } from "@alf/core/models";
import { RetroPaySummary } from "@alf/models/retro-pay/retro-pay-summary";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class RetroPaySummarySerializer implements Serializer<RetroPaySummary> {

    deserialize(data: undefined): undefined
    deserialize(data: any): RetroPaySummary
    deserialize(data: any): RetroPaySummary | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };

        return new RetroPaySummary(copy);
    }

    serialize(entity: RetroPaySummary | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: RetroPaySummary, _forceTypeHint?: boolean): any
    serialize(entity: RetroPaySummary | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? RetroPaySummary.typeNameHint : undefined,
            retroPayId: entity.retroPayId,
            importedDeltaCount: entity.importedDeltaCount,
            ignoredDeltaCount: entity.ignoredDeltaCount
        };
    }
}
