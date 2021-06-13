import { Serializer } from "@alf/core/models";
import { RetroPayRunOrder } from "@alf/models/retro-pay/retro-pay-run-order";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class RetroPayRunOrderSerializer implements Serializer<RetroPayRunOrder> {

    deserialize(data: undefined): undefined
    deserialize(data: any): RetroPayRunOrder
    deserialize(data: any): RetroPayRunOrder | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };

        return new RetroPayRunOrder(copy);
    }

    serialize(entity: RetroPayRunOrder | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: RetroPayRunOrder, _forceTypeHint?: boolean): any
    serialize(entity: RetroPayRunOrder | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? RetroPayRunOrder.typeNameHint : undefined,
            calculateRetroPayFromSinceLast: entity.calculateRetroPayFromSinceLast,
            companyId: entity.companyId,
            fromPeriodNumber: entity.fromPeriodNumber,
            toPeriodNumber: entity.toPeriodNumber,
            allEmployees: entity.allEmployees,
            selectedEmployees: entity.selectedEmployees
        };
    }
}
