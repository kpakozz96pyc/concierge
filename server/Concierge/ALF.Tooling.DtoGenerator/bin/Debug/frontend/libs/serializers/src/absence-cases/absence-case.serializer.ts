import { AbsenceCaseEmploymentGroupSerializer } from "./absence-case-employment-group.serializer";
import { AbsenceCaseStatusInfoSerializer } from "./absence-case-status-info.serializer";
import { serializeDate } from "@alf/core";
import { Serializer } from "@alf/core/models";
import { AbsenceCase } from "@alf/models/absence-cases/absence-case";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class AbsenceCaseSerializer implements Serializer<AbsenceCase> {

    deserialize(data: undefined): undefined
    deserialize(data: any): AbsenceCase
    deserialize(data: any): AbsenceCase | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        copy.startDate = new Date(copy.startDate);

        if (copy.currentEndDate !== undefined)
            copy.currentEndDate = new Date(copy.currentEndDate);

        copy.expectedEndDate = new Date(copy.expectedEndDate);

        copy.createdAt = new Date(copy.createdAt);

        if (copy.lastPossibleDateOfReimbursement !== undefined)
            copy.lastPossibleDateOfReimbursement = new Date(copy.lastPossibleDateOfReimbursement);

        copy.employmentGroups = (copy.employmentGroups || []).map(new AbsenceCaseEmploymentGroupSerializer().deserialize);

        copy.statuses = (copy.statuses || []).map(new AbsenceCaseStatusInfoSerializer().deserialize);

        return new AbsenceCase(copy);
    }

    serialize(entity: AbsenceCase | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: AbsenceCase, _forceTypeHint?: boolean): any
    serialize(entity: AbsenceCase | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? AbsenceCase.typeNameHint : undefined,
            id: entity.id,
            referenceNumber: entity.referenceNumber,
            waitingForJobId: entity.waitingForJobId,
            type: entity.type,
            companyId: entity.companyId,
            virksomhetsnummer: entity.virksomhetsnummer,
            employeeId: entity.employeeId,
            status: entity.status,
            startDate: serializeDate(entity.startDate),
            currentEndDate: serializeDate(entity.currentEndDate),
            expectedEndDate: serializeDate(entity.expectedEndDate),
            createdAt: entity.createdAt
                ? entity.createdAt.toISOString()
                : undefined,
            errorId: entity.errorId,
            errorMessage: entity.errorMessage,
            jobStatus: entity.jobStatus,
            lastPossibleDateOfReimbursement: serializeDate(entity.lastPossibleDateOfReimbursement),
            typeSpecificData: entity.typeSpecificData,
            employerAdvancesSalary: entity.employerAdvancesSalary,
            mode: entity.mode,
            transactions: entity.transactions,
            employmentGroups: entity.employmentGroups
                ? entity.employmentGroups.map(e => new AbsenceCaseEmploymentGroupSerializer().serialize(e, _forceTypeHint))
                : undefined,
            balance: entity.balance,
            isHolidayPay: entity.isHolidayPay,
            isProcessing: entity.isProcessing,
            isActive: entity.isActive,
            hasError: entity.hasError,
            statuses: entity.statuses
                ? entity.statuses.map(e => new AbsenceCaseStatusInfoSerializer().serialize(e, _forceTypeHint))
                : undefined
        };
    }
}
