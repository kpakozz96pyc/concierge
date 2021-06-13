import { Serializer } from "@alf/core/models";
import { ReimbursementReceipt } from "@alf/models/reimbursement-receipt/reimbursement-receipt";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class ReimbursementReceiptSerializer implements Serializer<ReimbursementReceipt> {

    deserialize(data: undefined): undefined
    deserialize(data: any): ReimbursementReceipt
    deserialize(data: any): ReimbursementReceipt | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        copy.createdAt = new Date(copy.createdAt);

        return new ReimbursementReceipt(copy);
    }

    serialize(entity: ReimbursementReceipt | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: ReimbursementReceipt, _forceTypeHint?: boolean): any
    serialize(entity: ReimbursementReceipt | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? ReimbursementReceipt.typeNameHint : undefined,
            id: entity.id,
            messageId: entity.messageId,
            companyId: entity.companyId,
            createdAt: entity.createdAt
                ? entity.createdAt.toISOString()
                : undefined,
            mode: entity.mode,
            isActive: entity.isActive,
            isProcessing: entity.isProcessing,
            hasError: entity.hasError,
            status: entity.status,
            isAbandoned: entity.isAbandoned,
            errorId: entity.errorId,
            errorMessage: entity.errorMessage,
            waitingForJobId: entity.waitingForJobId,
            sum: entity.sum,
            numberOfLines: entity.numberOfLines,
            numberOfDoneLines: entity.numberOfDoneLines
        };
    }
}
