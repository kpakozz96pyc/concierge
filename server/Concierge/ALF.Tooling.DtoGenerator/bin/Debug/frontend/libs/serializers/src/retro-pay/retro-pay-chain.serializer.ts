import { serializeDate } from "@alf/core";
import { Serializer } from "@alf/core/models";
import { RetroPayChain } from "@alf/models/retro-pay/retro-pay-chain";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class RetroPayChainSerializer implements Serializer<RetroPayChain> {

    deserialize(data: undefined): undefined
    deserialize(data: any): RetroPayChain
    deserialize(data: any): RetroPayChain | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        if (copy.transactionFromDate !== undefined)
            copy.transactionFromDate = new Date(copy.transactionFromDate);

        if (copy.transactionToDate !== undefined)
            copy.transactionToDate = new Date(copy.transactionToDate);

        return new RetroPayChain(copy);
    }

    serialize(entity: RetroPayChain | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: RetroPayChain, _forceTypeHint?: boolean): any
    serialize(entity: RetroPayChain | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? RetroPayChain.typeNameHint : undefined,
            id: entity.id,
            retroPayGroupingId: entity.retroPayGroupingId,
            transactionFromDate: serializeDate(entity.transactionFromDate),
            transactionToDate: serializeDate(entity.transactionToDate),
            originalAmount: entity.originalAmount,
            previousAmount: entity.previousAmount,
            previousDifference: entity.previousDifference,
            newDifference: entity.newDifference,
            newAmount: entity.newAmount,
            transactionId: entity.transactionId,
            companyId: entity.companyId,
            periodNumber: entity.periodNumber,
            periodId: entity.periodId,
            employeeNumber: entity.employeeNumber,
            payCode: entity.payCode,
            payCodeId: entity.payCodeId,
            transactionSequenceNumber: entity.transactionSequenceNumber,
            headRetroPayDelta: entity.headRetroPayDelta,
            deltas: entity.deltas
        };
    }
}
