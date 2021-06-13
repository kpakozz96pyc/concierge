import { Serializer } from "@alf/core/models";
import { PayCodeContext } from "@alf/models/search-context/pay-code-context";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class PayCodeContextSerializer implements Serializer<PayCodeContext> {

    deserialize(data: undefined): undefined
    deserialize(data: any): PayCodeContext
    deserialize(data: any): PayCodeContext | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };

        return new PayCodeContext(copy);
    }

    serialize(entity: PayCodeContext | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: PayCodeContext, _forceTypeHint?: boolean): any
    serialize(entity: PayCodeContext | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? PayCodeContext.typeNameHint : undefined,
            isBalance: entity.isBalance,
            transactionType: entity.transactionType
        };
    }
}
