import { FlowType } from "@alf/models/altinn/enums/flow-type";
import { OneTimePasswordType } from "@alf/models/altinn/enums/one-time-password-type";
import { Serializer } from "@alf/core/models";
import { SendOrder } from "@alf/models/orders/send-order";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class SendOrderSerializer implements Serializer<SendOrder> {

    deserialize(data: undefined): undefined
    deserialize(data: any): SendOrder
    deserialize(data: any): SendOrder | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        if (copy.oneTimePasswordType !== undefined)
            copy.oneTimePasswordType = OneTimePasswordType[copy.oneTimePasswordType];

        copy.flowType = FlowType[copy.flowType];

        return new SendOrder(copy);
    }

    serialize(entity: SendOrder | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: SendOrder, _forceTypeHint?: boolean): any
    serialize(entity: SendOrder | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? SendOrder.typeNameHint : undefined,
            companyId: entity.companyId,
            ameldingId: entity.ameldingId,
            oneTimePassword: entity.oneTimePassword,
            oneTimePasswordType: entity.oneTimePasswordType !== null && entity.oneTimePasswordType !== undefined
                ? OneTimePasswordType[entity.oneTimePasswordType]
                : undefined,
            flowType: FlowType[entity.flowType],
            failIfUnableToContinueOrComplete: entity.failIfUnableToContinueOrComplete
        };
    }
}
