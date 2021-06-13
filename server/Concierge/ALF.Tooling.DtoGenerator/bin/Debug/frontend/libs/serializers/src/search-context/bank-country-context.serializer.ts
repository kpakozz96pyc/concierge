import { Serializer } from "@alf/core/models";
import { BankCountryContext } from "@alf/models/search-context/bank-country-context";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class BankCountryContextSerializer implements Serializer<BankCountryContext> {

    deserialize(data: undefined): undefined
    deserialize(data: any): BankCountryContext
    deserialize(data: any): BankCountryContext | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };

        return new BankCountryContext(copy);
    }

    serialize(entity: BankCountryContext | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: BankCountryContext, _forceTypeHint?: boolean): any
    serialize(entity: BankCountryContext | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? BankCountryContext.typeNameHint : undefined,
            bankCountryCode: entity.bankCountryCode
        };
    }
}
