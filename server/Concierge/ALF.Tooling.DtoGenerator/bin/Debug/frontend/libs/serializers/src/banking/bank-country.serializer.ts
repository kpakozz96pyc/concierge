import { Serializer } from "@alf/core/models";
import { BankCountry } from "@alf/models/banking/bank-country";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class BankCountrySerializer implements Serializer<BankCountry> {

    deserialize(data: undefined): undefined
    deserialize(data: any): BankCountry
    deserialize(data: any): BankCountry | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };

        return new BankCountry(copy);
    }

    serialize(entity: BankCountry | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: BankCountry, _forceTypeHint?: boolean): any
    serialize(entity: BankCountry | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? BankCountry.typeNameHint : undefined,
            id: entity.id,
            companyId: entity.companyId,
            bankCountryCode: entity.bankCountryCode,
            description: entity.description,
            feeCode: entity.feeCode,
            text: entity.text
        };
    }
}
