import { FlowType } from "@alf/models/altinn/enums/flow-type";
import { OneTimePasswordType } from "@alf/models/altinn/enums/one-time-password-type";
import { Serializer } from "@alf/core/models";
import { NewRequestOrder } from "@alf/models/orders/new-request-order";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class NewRequestOrderSerializer implements Serializer<NewRequestOrder> {

    deserialize(data: undefined): undefined
    deserialize(data: any): NewRequestOrder
    deserialize(data: any): NewRequestOrder | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        if (copy.oneTimePasswordType !== undefined)
            copy.oneTimePasswordType = OneTimePasswordType[copy.oneTimePasswordType];

        copy.flowType = FlowType[copy.flowType];

        return new NewRequestOrder(copy);
    }

    serialize(entity: NewRequestOrder | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: NewRequestOrder, _forceTypeHint?: boolean): any
    serialize(entity: NewRequestOrder | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? NewRequestOrder.typeNameHint : undefined,
            companyId: entity.companyId,
            taxYear: entity.taxYear,
            oneTimePassword: entity.oneTimePassword,
            oneTimePasswordType: entity.oneTimePasswordType !== null && entity.oneTimePasswordType !== undefined
                ? OneTimePasswordType[entity.oneTimePasswordType]
                : undefined,
            flowType: FlowType[entity.flowType],
            onlyRequestForEmployeesWithTransactions: entity.onlyRequestForEmployeesWithTransactions
        };
    }
}
