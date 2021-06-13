import { serializeDate } from "@alf/core";
import { Serializer } from "@alf/core/models";
import { NewAbsenceCaseTransaction } from "@alf/models/transactions/new-absence-case-transaction";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class NewAbsenceCaseTransactionSerializer implements Serializer<NewAbsenceCaseTransaction> {

    deserialize(data: undefined): undefined
    deserialize(data: any): NewAbsenceCaseTransaction
    deserialize(data: any): NewAbsenceCaseTransaction | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        copy.from = new Date(copy.from);

        copy.to = new Date(copy.to);

        return new NewAbsenceCaseTransaction(copy);
    }

    serialize(entity: NewAbsenceCaseTransaction | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: NewAbsenceCaseTransaction, _forceTypeHint?: boolean): any
    serialize(entity: NewAbsenceCaseTransaction | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: entity.$type,
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
