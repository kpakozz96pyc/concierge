import { InternalFileUploadSerializer } from "../internal-file-upload/internal-file-upload.serializer";
import { serializeDate } from "@alf/core";
import { Serializer } from "@alf/core/models";
import { InputTransaction } from "@alf/models/transactions/input-transaction";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class InputTransactionSerializer implements Serializer<InputTransaction> {

    deserialize(data: undefined): undefined
    deserialize(data: any): InputTransaction
    deserialize(data: any): InputTransaction | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        if (copy.createdAt !== undefined)
            copy.createdAt = new Date(copy.createdAt);

        if (copy.changedAt !== undefined)
            copy.changedAt = new Date(copy.changedAt);

        if (copy.approvedOn !== undefined)
            copy.approvedOn = new Date(copy.approvedOn);

        if (copy.authorizedOn !== undefined)
            copy.authorizedOn = new Date(copy.authorizedOn);

        if (copy.endDate !== undefined)
            copy.endDate = new Date(copy.endDate);

        if (copy.startDate !== undefined)
            copy.startDate = new Date(copy.startDate);

        copy.attachments = (copy.attachments || []).map(new InternalFileUploadSerializer().deserialize);

        return new InputTransaction(copy);
    }

    serialize(entity: InputTransaction | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: InputTransaction, _forceTypeHint?: boolean): any
    serialize(entity: InputTransaction | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? InputTransaction.typeNameHint : undefined,
            id: entity.id,
            companyId: entity.companyId,
            payCodeId: entity.payCodeId,
            payCodeNumber: entity.payCodeNumber,
            periodId: entity.periodId,
            periodNumber: entity.periodNumber,
            employeeId: entity.employeeId,
            employeeNumber: entity.employeeNumber,
            employmentId: entity.employmentId,
            transactionSequenceNumber: entity.transactionSequenceNumber,
            objectId: entity.objectId,
            createdAt: entity.createdAt
                ? entity.createdAt.toISOString()
                : undefined,
            changedAt: entity.changedAt
                ? entity.changedAt.toISOString()
                : undefined,
            accountingAccount: entity.accountingAccount,
            accountingCodeId: entity.accountingCodeId,
            accountingCodeVat: entity.accountingCodeVat,
            accountingLedgerType: entity.accountingLedgerType,
            activityCode: entity.activityCode,
            amount: entity.amount,
            appendix: entity.appendix,
            appendixCodeAccounting: entity.appendixCodeAccounting,
            appendixTypeAccounting: entity.appendixTypeAccounting,
            approvedBy: entity.approvedBy,
            approvedOn: serializeDate(entity.approvedOn),
            authorizedBy: entity.authorizedBy,
            authorizedOn: serializeDate(entity.authorizedOn),
            companyCarId: entity.companyCarId,
            costDimensionA: entity.costDimensionA,
            costDimensionB: entity.costDimensionB,
            costDimensionC: entity.costDimensionC,
            costDimensionD: entity.costDimensionD,
            countryCode: entity.countryCode,
            customerIdentificationNumber: entity.customerIdentificationNumber,
            description: entity.description,
            endDate: serializeDate(entity.endDate),
            hours: entity.hours,
            lockTransactionES4: entity.lockTransactionES4,
            municipalityId: entity.municipalityId,
            organizationId: entity.organizationId,
            ownerOfDeduction: entity.ownerOfDeduction,
            payToAccount: entity.payToAccount,
            positionPercentage: entity.positionPercentage,
            principalId: entity.principalId,
            principalReference: entity.principalReference,
            projectDimension1: entity.projectDimension1,
            projectDimension2: entity.projectDimension2,
            projectDimension3: entity.projectDimension3,
            projectDimension4: entity.projectDimension4,
            projectDimension5: entity.projectDimension5,
            projectDimension6Amount: entity.projectDimension6Amount,
            projectDimension6Hours: entity.projectDimension6Hours,
            quantity: entity.quantity,
            rate: entity.rate,
            regulativeId: entity.regulativeId,
            regulativeBId: entity.regulativeBId,
            startDate: serializeDate(entity.startDate),
            taxationRule: entity.taxationRule,
            wageStep: entity.wageStep,
            wageStepB: entity.wageStepB,
            week: entity.week,
            payslipText: entity.payslipText,
            referenceForAttachmentId: entity.referenceForAttachmentId,
            referenceAttachmentType: entity.referenceAttachmentType,
            attachments: entity.attachments
                ? entity.attachments.map(e => new InternalFileUploadSerializer().serialize(e, _forceTypeHint))
                : undefined
        };
    }
}
