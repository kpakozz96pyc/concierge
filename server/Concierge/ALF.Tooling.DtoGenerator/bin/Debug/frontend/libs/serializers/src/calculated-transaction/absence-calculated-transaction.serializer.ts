import { serializeDate } from "@alf/core";
import { Serializer } from "@alf/core/models";
import { AbsenceCalculatedTransaction } from "@alf/models/calculated-transaction/absence-calculated-transaction";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class AbsenceCalculatedTransactionSerializer implements Serializer<AbsenceCalculatedTransaction> {

    deserialize(data: undefined): undefined
    deserialize(data: any): AbsenceCalculatedTransaction
    deserialize(data: any): AbsenceCalculatedTransaction | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        copy.from = new Date(copy.from);

        copy.to = new Date(copy.to);

        return new AbsenceCalculatedTransaction(copy);
    }

    serialize(entity: AbsenceCalculatedTransaction | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: AbsenceCalculatedTransaction, _forceTypeHint?: boolean): any
    serialize(entity: AbsenceCalculatedTransaction | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? AbsenceCalculatedTransaction.typeNameHint : undefined,
            id: entity.id,
            companyId: entity.companyId,
            employeeId: entity.employeeId,
            employmentId: entity.employmentId,
            from: serializeDate(entity.from),
            to: serializeDate(entity.to),
            absenceGradePercent: entity.absenceGradePercent,
            absenceCodeId: entity.absenceCodeId,
            absenceCaseId: entity.absenceCaseId,
            sickNoteId: entity.sickNoteId,
            sicknessBenefitApplicationId: entity.sicknessBenefitApplicationId,
            absenceInputTransactionId: entity.absenceInputTransactionId,
            incomeReportId: entity.incomeReportId,
            isInEmployerPeriod: entity.isInEmployerPeriod,
            shouldPaySalary: entity.shouldPaySalary
        };
    }
}
