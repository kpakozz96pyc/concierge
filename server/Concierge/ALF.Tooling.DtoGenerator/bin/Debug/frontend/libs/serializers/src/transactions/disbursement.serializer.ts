import { PayoutType } from "@alf/models/transactions/enums/payout-type";
import { Serializer } from "@alf/core/models";
import { Disbursement } from "@alf/models/transactions/disbursement";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class DisbursementSerializer implements Serializer<Disbursement> {

    deserialize(data: undefined): undefined
    deserialize(data: any): Disbursement
    deserialize(data: any): Disbursement | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        copy.payoutType = PayoutType[copy.payoutType];

        return new Disbursement(copy);
    }

    serialize(entity: Disbursement | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: Disbursement, _forceTypeHint?: boolean): any
    serialize(entity: Disbursement | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? Disbursement.typeNameHint : undefined,
            companyId: entity.companyId,
            periodNumber: entity.periodNumber,
            employeeNumber: entity.employeeNumber,
            payoutType: PayoutType[entity.payoutType],
            account: entity.account,
            swift: entity.swift,
            payout: entity.payout
        };
    }
}
