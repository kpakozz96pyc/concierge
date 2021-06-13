import { Serializer } from "@alf/core/models";
import { RetroPayOrder } from "@alf/models/retro-pay/retro-pay-order";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class RetroPayOrderSerializer implements Serializer<RetroPayOrder> {

    deserialize(data: undefined): undefined
    deserialize(data: any): RetroPayOrder
    deserialize(data: any): RetroPayOrder | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };

        return new RetroPayOrder(copy);
    }

    serialize(entity: RetroPayOrder | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: RetroPayOrder, _forceTypeHint?: boolean): any
    serialize(entity: RetroPayOrder | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? RetroPayOrder.typeNameHint : undefined,
            companyId: entity.companyId,
            directImport: entity.directImport,
            earliestImportPeriodNumber: entity.earliestImportPeriodNumber,
            contextRetroPayRunId: entity.contextRetroPayRunId
        };
    }
}
