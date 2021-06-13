import { FlowType } from "@alf/models/altinn/enums/flow-type";
import { OneTimePasswordType } from "@alf/models/altinn/enums/one-time-password-type";
import { Serializer } from "@alf/core/models";
import { RefreshPasswordOrder } from "@alf/models/orders/refresh-password-order";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class RefreshPasswordOrderSerializer implements Serializer<RefreshPasswordOrder> {

    deserialize(data: undefined): undefined
    deserialize(data: any): RefreshPasswordOrder
    deserialize(data: any): RefreshPasswordOrder | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        if (copy.oneTimePasswordType !== undefined)
            copy.oneTimePasswordType = OneTimePasswordType[copy.oneTimePasswordType];

        copy.flowType = FlowType[copy.flowType];

        return new RefreshPasswordOrder(copy);
    }

    serialize(entity: RefreshPasswordOrder | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: RefreshPasswordOrder, _forceTypeHint?: boolean): any
    serialize(entity: RefreshPasswordOrder | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? RefreshPasswordOrder.typeNameHint : undefined,
            taxImportId: entity.taxImportId,
            oneTimePassword: entity.oneTimePassword,
            oneTimePasswordType: entity.oneTimePasswordType !== null && entity.oneTimePasswordType !== undefined
                ? OneTimePasswordType[entity.oneTimePasswordType]
                : undefined,
            flowType: FlowType[entity.flowType]
        };
    }
}
