import { IncomeReportBenefitDataSerializer } from "./income-report-benefit-data.serializer";
import { IncomeReportFillErrorSerializer } from "./income-report-fill-error.serializer";
import { IncomeReportFringeBenefitChangeSerializer } from "./income-report-fringe-benefit-change.serializer";
import { serializeDate } from "@alf/core";
import { Serializer } from "@alf/core/models";
import { IncomeReport } from "@alf/models/income-reports/income-report";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class IncomeReportSerializer implements Serializer<IncomeReport> {

    deserialize(data: undefined): undefined
    deserialize(data: any): IncomeReport
    deserialize(data: any): IncomeReport | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        copy.createdAt = new Date(copy.createdAt);

        copy.fillErrors = (copy.fillErrors || []).map(new IncomeReportFillErrorSerializer().deserialize);

        if (copy.sentAt !== undefined)
            copy.sentAt = new Date(copy.sentAt);

        if (copy.reimbursementEndDate !== undefined)
            copy.reimbursementEndDate = new Date(copy.reimbursementEndDate);

        copy.fringeBenefitChanges = (copy.fringeBenefitChanges || []).map(new IncomeReportFringeBenefitChangeSerializer().deserialize);

        copy.benefitData = new IncomeReportBenefitDataSerializer().deserialize(copy.benefitData);

        return new IncomeReport(copy);
    }

    serialize(entity: IncomeReport | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: IncomeReport, _forceTypeHint?: boolean): any
    serialize(entity: IncomeReport | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? IncomeReport.typeNameHint : undefined,
            id: entity.id,
            replacesIncomeReportId: entity.replacesIncomeReportId,
            replacedByIncomeReportId: entity.replacedByIncomeReportId,
            absenceCaseId: entity.absenceCaseId,
            absenceCaseEmploymentGroupId: entity.absenceCaseEmploymentGroupId,
            schemaVersion: entity.schemaVersion,
            companyId: entity.companyId,
            employeeId: entity.employeeId,
            status: entity.status,
            createdByUserId: entity.createdByUserId,
            createdByUsername: entity.createdByUsername,
            createdAt: entity.createdAt
                ? entity.createdAt.toISOString()
                : undefined,
            isAbandoned: entity.isAbandoned,
            waitingForJobId: entity.waitingForJobId,
            isManuallyTouched: entity.isManuallyTouched,
            shouldBeAutofilled: entity.shouldBeAutofilled,
            isFillApproved: entity.isFillApproved,
            fillErrors: entity.fillErrors
                ? entity.fillErrors.map(e => new IncomeReportFillErrorSerializer().serialize(e, _forceTypeHint))
                : undefined,
            sendError: entity.sendError,
            sendErrorMessage: entity.sendErrorMessage,
            sentAt: entity.sentAt
                ? entity.sentAt.toISOString()
                : undefined,
            archivedMessageId: entity.archivedMessageId,
            archiveReference: entity.archiveReference,
            errorId: entity.errorId,
            errorMessage: entity.errorMessage,
            reason: entity.reason,
            socialSecurityNumber: entity.socialSecurityNumber,
            virksomhetsnummer: entity.virksomhetsnummer,
            systemName: entity.systemName,
            systemVersion: entity.systemVersion,
            arbeidsforholdId: entity.arbeidsforholdId,
            mode: entity.mode,
            isActive: entity.isActive,
            isProcessing: entity.isProcessing,
            hasError: entity.hasError,
            hasCloseRelation: entity.hasCloseRelation,
            senderName: entity.senderName,
            senderPhoneNumber: entity.senderPhoneNumber,
            income: entity.income,
            incomeChangeReason: entity.incomeChangeReason,
            reimbursementAmountPerMonth: entity.reimbursementAmountPerMonth,
            reimbursementEndDate: serializeDate(entity.reimbursementEndDate),
            fringeBenefitChanges: entity.fringeBenefitChanges
                ? entity.fringeBenefitChanges.map(e => new IncomeReportFringeBenefitChangeSerializer().serialize(e, _forceTypeHint))
                : undefined,
            benefitData: new IncomeReportBenefitDataSerializer().serialize(entity.benefitData, _forceTypeHint)
        };
    }
}
