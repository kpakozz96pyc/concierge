import { WebTransactionType } from "@alf/models/transactions/enums/web-transaction-type";
import { WebTransactionOrigin } from "@alf/models/transactions/enums/web-transaction-origin";
import { WebTransactionStatus } from "@alf/models/transactions/enums/web-transaction-status";
import { InternalFileUploadSerializer } from "../internal-file-upload/internal-file-upload.serializer";
import { serializeDate } from "@alf/core";
import { Serializer } from "@alf/core/models";
import { WebInputTransaction } from "@alf/models/transactions/web-input-transaction";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class WebInputTransactionSerializer implements Serializer<WebInputTransaction> {

    deserialize(data: undefined): undefined
    deserialize(data: any): WebInputTransaction
    deserialize(data: any): WebInputTransaction | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        copy.type = WebTransactionType[copy.type];

        if (copy.changedDate !== undefined)
            copy.changedDate = new Date(copy.changedDate);

        copy.registrationOrigin = WebTransactionOrigin[copy.registrationOrigin];

        copy.status = WebTransactionStatus[copy.status];

        if (copy.startDate !== undefined)
            copy.startDate = new Date(copy.startDate);

        if (copy.endDate !== undefined)
            copy.endDate = new Date(copy.endDate);

        if (copy.approvedDate !== undefined)
            copy.approvedDate = new Date(copy.approvedDate);

        if (copy.authorizedDate !== undefined)
            copy.authorizedDate = new Date(copy.authorizedDate);

        copy.attachments = (copy.attachments || []).map(new InternalFileUploadSerializer().deserialize);

        return new WebInputTransaction(copy);
    }

    serialize(entity: WebInputTransaction | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: WebInputTransaction, _forceTypeHint?: boolean): any
    serialize(entity: WebInputTransaction | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? WebInputTransaction.typeNameHint : undefined,
            id: entity.id,
            transactionId: entity.transactionId,
            companyId: entity.companyId,
            employeeId: entity.employeeId,
            employeeNumber: entity.employeeNumber,
            type: WebTransactionType[entity.type],
            payCodeId: entity.payCodeId,
            payCodeNumber: entity.payCodeNumber,
            transactionSequenceNumber: entity.transactionSequenceNumber,
            employmentId: entity.employmentId,
            changedBy: entity.changedBy,
            changedDate: entity.changedDate
                ? entity.changedDate.toISOString()
                : undefined,
            registrationOrigin: WebTransactionOrigin[entity.registrationOrigin],
            customerIdentificationNumber: entity.customerIdentificationNumber,
            isInputTransaction: entity.isInputTransaction,
            generatedFromTransactionId: entity.generatedFromTransactionId,
            isTimeOffRequested: entity.isTimeOffRequested,
            weekLineSequenceNumber: entity.weekLineSequenceNumber,
            heapNumber: entity.heapNumber,
            importDate: entity.importDate,
            importUser: entity.importUser,
            status: WebTransactionStatus[entity.status],
            startDate: serializeDate(entity.startDate),
            endDate: serializeDate(entity.endDate),
            appendix: entity.appendix,
            description: entity.description,
            payslipText: entity.payslipText,
            projectDimension1: entity.projectDimension1,
            projectDimension2: entity.projectDimension2,
            projectDimension3: entity.projectDimension3,
            projectDimension4: entity.projectDimension4,
            projectDimension5: entity.projectDimension5,
            projectDimension6Amount: entity.projectDimension6Amount,
            projectDimension6Hours: entity.projectDimension6Hours,
            costDimensionA: entity.costDimensionA,
            costDimensionB: entity.costDimensionB,
            costDimensionC: entity.costDimensionC,
            costDimensionD: entity.costDimensionD,
            activityCode: entity.activityCode,
            accountingCodeId: entity.accountingCodeId,
            accountingAccount: entity.accountingAccount,
            taxationRule: entity.taxationRule,
            hours: entity.hours,
            rate: entity.rate,
            amount: entity.amount,
            week: entity.week,
            quantity: entity.quantity,
            approvedBy: entity.approvedBy,
            approvedDate: entity.approvedDate
                ? entity.approvedDate.toISOString()
                : undefined,
            authorizedBy: entity.authorizedBy,
            authorizedDate: serializeDate(entity.authorizedDate),
            referenceForAttachmentId: entity.referenceForAttachmentId,
            referenceAttachmentType: entity.referenceAttachmentType,
            attachments: entity.attachments
                ? entity.attachments.map(e => new InternalFileUploadSerializer().serialize(e, _forceTypeHint))
                : undefined
        };
    }
}
