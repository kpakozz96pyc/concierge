import { serializeDate } from "@alf/core";
import { Serializer } from "@alf/core/models";
import { AbsenceCaseTransaction } from "@alf/models/transactions/absence-case-transaction";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class AbsenceCaseTransactionSerializer implements Serializer<AbsenceCaseTransaction> {

    deserialize(data: undefined): undefined
    deserialize(data: any): AbsenceCaseTransaction
    deserialize(data: any): AbsenceCaseTransaction | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        copy.from = new Date(copy.from);

        copy.to = new Date(copy.to);

        return new AbsenceCaseTransaction(copy);
    }

    serialize(entity: AbsenceCaseTransaction | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: AbsenceCaseTransaction, _forceTypeHint?: boolean): any
    serialize(entity: AbsenceCaseTransaction | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: entity.$type,
            id: entity.id,
            isSentToAccounting: entity.isSentToAccounting,
            companyId: entity.companyId,
            employeeId: entity.employeeId,
            from: serializeDate(entity.from),
            to: serializeDate(entity.to),
            dailyAmount: entity.dailyAmount,
            amount: entity.amount,
            type: entity.type,
            negatesTransactionId: entity.negatesTransactionId,
            absenceCaseId: entity.absenceCaseId,
            incomeReportId: entity.incomeReportId,
            sicknessBenefitApplicationId: entity.sicknessBenefitApplicationId,
            reimbursementReceiptLineId: entity.reimbursementReceiptLineId,
            targetAbsenceCaseId: entity.targetAbsenceCaseId
        };
    }
}
