import { Serializer } from "@alf/core/models";
import { BankTransferRejectedTransactionMarkAsHandledAction } from "@alf/models/work/bank-transfer-rejected-transaction-mark-as-handled-action";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class BankTransferRejectedTransactionMarkAsHandledActionSerializer implements Serializer<BankTransferRejectedTransactionMarkAsHandledAction> {

    deserialize(data: undefined): undefined
    deserialize(data: any): BankTransferRejectedTransactionMarkAsHandledAction
    deserialize(data: any): BankTransferRejectedTransactionMarkAsHandledAction | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };

        return new BankTransferRejectedTransactionMarkAsHandledAction(copy);
    }

    serialize(entity: BankTransferRejectedTransactionMarkAsHandledAction | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: BankTransferRejectedTransactionMarkAsHandledAction, _forceTypeHint?: boolean): any
    serialize(entity: BankTransferRejectedTransactionMarkAsHandledAction | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: entity.$type,
            bankTransferRejectedTransactionId: entity.bankTransferRejectedTransactionId
        };
    }
}
