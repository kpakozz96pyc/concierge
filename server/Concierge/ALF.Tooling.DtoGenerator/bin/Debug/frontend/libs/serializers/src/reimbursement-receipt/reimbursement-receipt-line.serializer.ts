import { serializeDate } from "@alf/core";
import { Serializer } from "@alf/core/models";
import { ReimbursementReceiptLine } from "@alf/models/reimbursement-receipt/reimbursement-receipt-line";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class ReimbursementReceiptLineSerializer implements Serializer<ReimbursementReceiptLine> {

    deserialize(data: undefined): undefined
    deserialize(data: any): ReimbursementReceiptLine
    deserialize(data: any): ReimbursementReceiptLine | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        copy.startDate = new Date(copy.startDate);

        copy.endDate = new Date(copy.endDate);

        if (copy.maximumReimbursementAmountEndDate !== undefined)
            copy.maximumReimbursementAmountEndDate = new Date(copy.maximumReimbursementAmountEndDate);

        copy.createdAt = new Date(copy.createdAt);

        return new ReimbursementReceiptLine(copy);
    }

    serialize(entity: ReimbursementReceiptLine | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: ReimbursementReceiptLine, _forceTypeHint?: boolean): any
    serialize(entity: ReimbursementReceiptLine | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? ReimbursementReceiptLine.typeNameHint : undefined,
            id: entity.id,
            mode: entity.mode,
            socialSecurityNumber: entity.socialSecurityNumber,
            name: entity.name,
            organizationCode: entity.organizationCode,
            companySubNumber: entity.companySubNumber,
            receiptType: entity.receiptType,
            startDate: serializeDate(entity.startDate),
            endDate: serializeDate(entity.endDate),
            maximumReimbursementAmountEndDate: serializeDate(entity.maximumReimbursementAmountEndDate),
            amount: entity.amount,
            accountNumber: entity.accountNumber,
            reimbursementReceiptId: entity.reimbursementReceiptId,
            companyId: entity.companyId,
            createdAt: entity.createdAt
                ? entity.createdAt.toISOString()
                : undefined,
            isActive: entity.isActive,
            isProcessing: entity.isProcessing,
            hasError: entity.hasError,
            employeeId: entity.employeeId,
            errorId: entity.errorId,
            errorMessage: entity.errorMessage,
            status: entity.status,
            waitingForJobId: entity.waitingForJobId,
            resolveEmployeeError: entity.resolveEmployeeError,
            absenceCaseId: entity.absenceCaseId,
            resolveAbsenceCaseError: entity.resolveAbsenceCaseError,
            isAbandoned: entity.isAbandoned,
            isTypeIrrelevant: entity.isTypeIrrelevant
        };
    }
}
