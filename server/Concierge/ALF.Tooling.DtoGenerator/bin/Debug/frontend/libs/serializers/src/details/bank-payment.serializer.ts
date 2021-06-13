import { Serializer } from "@alf/core/models";
import { BankPayment } from "@alf/models/details/bank-payment";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class BankPaymentSerializer implements Serializer<BankPayment> {

    deserialize(data: undefined): undefined
    deserialize(data: any): BankPayment
    deserialize(data: any): BankPayment | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };

        return new BankPayment(copy);
    }

    serialize(entity: BankPayment | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: BankPayment, _forceTypeHint?: boolean): any
    serialize(entity: BankPayment | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? BankPayment.typeNameHint : undefined,
            bankAccount: entity.bankAccount,
            amount: entity.amount
        };
    }
}
