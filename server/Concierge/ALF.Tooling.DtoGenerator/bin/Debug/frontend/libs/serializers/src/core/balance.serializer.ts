import { Serializer } from "@alf/core/models";
import { Balance } from "@alf/models/core/balance";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class BalanceSerializer implements Serializer<Balance> {

    deserialize(data: undefined): undefined
    deserialize(data: any): Balance
    deserialize(data: any): Balance | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };

        return new Balance(copy);
    }

    serialize(entity: Balance | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: Balance, _forceTypeHint?: boolean): any
    serialize(entity: Balance | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? Balance.typeNameHint : undefined,
            id: entity.id,
            companyId: entity.companyId,
            employeeId: entity.employeeId,
            payCodeNumber: entity.payCodeNumber,
            payCodeId: entity.payCodeId,
            balanceAmount: entity.balanceAmount,
            interestRate: entity.interestRate,
            interestAmount: entity.interestAmount,
            startBalance: entity.startBalance
        };
    }
}
