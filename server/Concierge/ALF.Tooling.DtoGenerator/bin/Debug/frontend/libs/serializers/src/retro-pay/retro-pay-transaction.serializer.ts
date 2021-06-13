import { Serializer } from "@alf/core/models";
import { RetroPayTransaction } from "@alf/models/retro-pay/retro-pay-transaction";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class RetroPayTransactionSerializer implements Serializer<RetroPayTransaction> {

    deserialize(data: undefined): undefined
    deserialize(data: any): RetroPayTransaction
    deserialize(data: any): RetroPayTransaction | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };

        return new RetroPayTransaction(copy);
    }

    serialize(entity: RetroPayTransaction | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: RetroPayTransaction, _forceTypeHint?: boolean): any
    serialize(entity: RetroPayTransaction | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? RetroPayTransaction.typeNameHint : undefined,
            id: entity.id,
            retroPayId: entity.retroPayId,
            retroPayTransactionDeltaId: entity.retroPayTransactionDeltaId,
            companyId: entity.companyId,
            heapNumber: entity.heapNumber,
            periodNumber: entity.periodNumber,
            employeeNumber: entity.employeeNumber,
            payCode: entity.payCode,
            transactionSequenceNumber: entity.transactionSequenceNumber
        };
    }
}
