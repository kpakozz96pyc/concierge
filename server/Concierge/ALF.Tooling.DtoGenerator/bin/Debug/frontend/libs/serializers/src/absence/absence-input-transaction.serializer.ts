import { serializeDate } from "@alf/core";
import { Serializer } from "@alf/core/models";
import { AbsenceInputTransaction } from "@alf/models/absence/absence-input-transaction";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class AbsenceInputTransactionSerializer implements Serializer<AbsenceInputTransaction> {

    deserialize(data: undefined): undefined
    deserialize(data: any): AbsenceInputTransaction
    deserialize(data: any): AbsenceInputTransaction | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        copy.changedAt = new Date(copy.changedAt);

        copy.fromDate = new Date(copy.fromDate);

        if (copy.toDate !== undefined)
            copy.toDate = new Date(copy.toDate);

        return new AbsenceInputTransaction(copy);
    }

    serialize(entity: AbsenceInputTransaction | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: AbsenceInputTransaction, _forceTypeHint?: boolean): any
    serialize(entity: AbsenceInputTransaction | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? AbsenceInputTransaction.typeNameHint : undefined,
            id: entity.id,
            companyId: entity.companyId,
            employeeId: entity.employeeId,
            changedAt: entity.changedAt
                ? entity.changedAt.toISOString()
                : undefined,
            employmentId: entity.employmentId,
            description: entity.description,
            registrationType: entity.registrationType,
            fromDate: serializeDate(entity.fromDate),
            toDate: serializeDate(entity.toDate),
            absenceCode: entity.absenceCode,
            absenceGradePercent: entity.absenceGradePercent,
            hours: entity.hours,
            isAbandoned: entity.isAbandoned
        };
    }
}
