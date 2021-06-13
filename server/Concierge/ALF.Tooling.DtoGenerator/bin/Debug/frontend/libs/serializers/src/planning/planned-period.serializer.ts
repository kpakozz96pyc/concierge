import { PeriodTaxDeductionType } from "@alf/models/periods/enums/period-tax-deduction-type";
import { PeriodGarnishmentsType } from "@alf/models/periods/enums/period-garnishments-type";
import { PlannedPeriodTextSerializer } from "./planned-period-text.serializer";
import { serializeDate } from "@alf/core";
import { Serializer } from "@alf/core/models";
import { PlannedPeriod } from "@alf/models/planning/planned-period";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class PlannedPeriodSerializer implements Serializer<PlannedPeriod> {

    deserialize(data: undefined): undefined
    deserialize(data: any): PlannedPeriod
    deserialize(data: any): PlannedPeriod | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        copy.willBeCreatedAt = new Date(copy.willBeCreatedAt);

        copy.startDate = new Date(copy.startDate);

        copy.endDate = new Date(copy.endDate);

        copy.payDate = new Date(copy.payDate);

        copy.tableTaxDeduction = PeriodTaxDeductionType[copy.tableTaxDeduction];

        copy.percentTaxDeduction = PeriodTaxDeductionType[copy.percentTaxDeduction];

        copy.tableGarnishments = PeriodGarnishmentsType[copy.tableGarnishments];

        copy.percentGarnishments = PeriodGarnishmentsType[copy.percentGarnishments];

        copy.payslipTexts = (copy.payslipTexts || []).map(new PlannedPeriodTextSerializer().deserialize);

        return new PlannedPeriod(copy);
    }

    serialize(entity: PlannedPeriod | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: PlannedPeriod, _forceTypeHint?: boolean): any
    serialize(entity: PlannedPeriod | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? PlannedPeriod.typeNameHint : undefined,
            id: entity.id,
            periodPlanId: entity.periodPlanId,
            periodPlanUsageId: entity.periodPlanUsageId,
            companyId: entity.companyId,
            description: entity.description,
            periodNumber: entity.periodNumber,
            doNotCreate: entity.doNotCreate,
            isPeriodCreated: entity.isPeriodCreated,
            willBeCreatedAt: entity.willBeCreatedAt
                ? entity.willBeCreatedAt.toISOString()
                : undefined,
            processTemplateId: entity.processTemplateId,
            periodType: entity.periodType,
            periodPayType: entity.periodPayType,
            year: entity.year,
            month: entity.month,
            accountingYear: entity.accountingYear,
            accountingMonth: entity.accountingMonth,
            startDate: serializeDate(entity.startDate),
            endDate: serializeDate(entity.endDate),
            payDate: serializeDate(entity.payDate),
            subGroups: entity.subGroups,
            paymentCycle: entity.paymentCycle,
            tableTaxDeduction: PeriodTaxDeductionType[entity.tableTaxDeduction],
            percentTaxDeduction: PeriodTaxDeductionType[entity.percentTaxDeduction],
            tableGarnishments: PeriodGarnishmentsType[entity.tableGarnishments],
            percentGarnishments: PeriodGarnishmentsType[entity.percentGarnishments],
            calculateCommonArrangements: entity.calculateCommonArrangements,
            stopRecurringTransactions: entity.stopRecurringTransactions,
            isDirty: entity.isDirty,
            prepayDeduction: entity.prepayDeduction,
            perYearSequenceNumber: entity.perYearSequenceNumber,
            perMonthSequenceNumber: entity.perMonthSequenceNumber,
            originallyPlannedPeriodNumber: entity.originallyPlannedPeriodNumber,
            payslipTexts: entity.payslipTexts
                ? entity.payslipTexts.map(e => new PlannedPeriodTextSerializer().serialize(e, _forceTypeHint))
                : undefined,
            planningStatus: entity.planningStatus,
            isLocked: entity.isLocked,
            planningConflictStatus: entity.planningConflictStatus,
            generateVacationPay: entity.generateVacationPay,
            generateDeductionVacationPay: entity.generateDeductionVacationPay
        };
    }
}
