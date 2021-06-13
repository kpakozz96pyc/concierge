import { Serializer } from "@alf/core/models";
import { RetroPayDeltaStatusUpdate } from "@alf/models/retro-pay/retro-pay-delta-status-update";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class RetroPayDeltaStatusUpdateSerializer implements Serializer<RetroPayDeltaStatusUpdate> {

    deserialize(data: undefined): undefined
    deserialize(data: any): RetroPayDeltaStatusUpdate
    deserialize(data: any): RetroPayDeltaStatusUpdate | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };

        return new RetroPayDeltaStatusUpdate(copy);
    }

    serialize(entity: RetroPayDeltaStatusUpdate | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: RetroPayDeltaStatusUpdate, _forceTypeHint?: boolean): any
    serialize(entity: RetroPayDeltaStatusUpdate | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? RetroPayDeltaStatusUpdate.typeNameHint : undefined,
            ids: entity.ids,
            companyId: entity.companyId,
            allSelected: entity.allSelected,
            contextStatus: entity.contextStatus,
            filter: entity.filter,
            toSetTreatment: entity.toSetTreatment
        };
    }
}
