import { AbsenceCaseTransactionSerializer } from "./absence-case-transaction.serializer";
import { NewAbsenceCaseTransactionSerializer } from "./new-absence-case-transaction.serializer";
import { AbsenceCaseTransaction } from "@alf/models/transactions/absence-case-transaction";
import { NewAbsenceCaseTransaction } from "@alf/models/transactions/new-absence-case-transaction";
import { serializeDate } from "@alf/core";
import { Serializer } from "@alf/core/models";
import { AbsenceCaseTransactionBase } from "@alf/models/transactions/absence-case-transaction-base";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class AbsenceCaseTransactionBaseSerializer implements Serializer<AbsenceCaseTransactionBase> {

    deserialize(data: undefined): undefined
    deserialize(data: any): AbsenceCaseTransactionBase
    deserialize(data: any): AbsenceCaseTransactionBase | undefined {
        if (!data) {
            return undefined;
        }

        if (data.$type === "ALF.Shared.Dto.Models.Absence.AbsenceCases.Transactions.AbsenceCaseTransaction, ALF.Shared.Dto")
            return new AbsenceCaseTransactionSerializer().deserialize(data);

        if (data.$type === "ALF.Shared.Dto.Models.Absence.AbsenceCases.Transactions.NewAbsenceCaseTransaction, ALF.Shared.Dto")
            return new NewAbsenceCaseTransactionSerializer().deserialize(data);

        const copy = { ...data };
        copy.from = new Date(copy.from);

        copy.to = new Date(copy.to);

        return new AbsenceCaseTransactionBase(copy);
    }

    serialize(entity: AbsenceCaseTransactionBase | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: AbsenceCaseTransactionBase, _forceTypeHint?: boolean): any
    serialize(entity: AbsenceCaseTransactionBase | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        if (entity.$type === "ALF.Shared.Dto.Models.Absence.AbsenceCases.Transactions.AbsenceCaseTransaction, ALF.Shared.Dto")
            return new AbsenceCaseTransactionSerializer().serialize(entity as AbsenceCaseTransaction, _forceTypeHint);

        if (entity.$type === "ALF.Shared.Dto.Models.Absence.AbsenceCases.Transactions.NewAbsenceCaseTransaction, ALF.Shared.Dto")
            return new NewAbsenceCaseTransactionSerializer().serialize(entity as NewAbsenceCaseTransaction, _forceTypeHint);

        return {
            $type: _forceTypeHint ? AbsenceCaseTransactionBase.typeNameHint : undefined,
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
