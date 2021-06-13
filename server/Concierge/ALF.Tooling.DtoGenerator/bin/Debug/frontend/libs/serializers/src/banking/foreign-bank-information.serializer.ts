import { Serializer } from "@alf/core/models";
import { ForeignBankInformation } from "@alf/models/banking/foreign-bank-information";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class ForeignBankInformationSerializer implements Serializer<ForeignBankInformation> {

    deserialize(data: undefined): undefined
    deserialize(data: any): ForeignBankInformation
    deserialize(data: any): ForeignBankInformation | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };

        return new ForeignBankInformation(copy);
    }

    serialize(entity: ForeignBankInformation | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: ForeignBankInformation, _forceTypeHint?: boolean): any
    serialize(entity: ForeignBankInformation | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? ForeignBankInformation.typeNameHint : undefined,
            id: entity.id,
            companyId: entity.companyId,
            bankCountryCode: entity.bankCountryCode,
            code: entity.code,
            name: entity.name,
            address1: entity.address1,
            address2: entity.address2,
            address3: entity.address3,
            feeCode: entity.feeCode,
            useAddressInformation: entity.useAddressInformation
        };
    }
}
