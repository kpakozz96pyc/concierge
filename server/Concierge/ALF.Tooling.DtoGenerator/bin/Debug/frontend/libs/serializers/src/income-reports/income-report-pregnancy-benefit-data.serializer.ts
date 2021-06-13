﻿import { IncomeReportPeriodSerializer } from "./income-report-period.serializer";
import { IncomeReportReimbursementChangeSerializer } from "./income-report-reimbursement-change.serializer";
import { serializeDate } from "@alf/core";
import { Serializer } from "@alf/core/models";
import { IncomeReportPregnancyBenefitData } from "@alf/models/income-reports/income-report-pregnancy-benefit-data";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class IncomeReportPregnancyBenefitDataSerializer implements Serializer<IncomeReportPregnancyBenefitData> {

    deserialize(data: undefined): undefined
    deserialize(data: any): IncomeReportPregnancyBenefitData
    deserialize(data: any): IncomeReportPregnancyBenefitData | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        copy.firstDayOfAbsence = new Date(copy.firstDayOfAbsence);

        copy.vacationPeriods = (copy.vacationPeriods || []).map(new IncomeReportPeriodSerializer().deserialize);

        copy.reimbursementChanges = (copy.reimbursementChanges || []).map(new IncomeReportReimbursementChangeSerializer().deserialize);

        return new IncomeReportPregnancyBenefitData(copy);
    }

    serialize(entity: IncomeReportPregnancyBenefitData | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: IncomeReportPregnancyBenefitData, _forceTypeHint?: boolean): any
    serialize(entity: IncomeReportPregnancyBenefitData | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: entity.$type,
            type: entity.type,
            firstDayOfAbsence: serializeDate(entity.firstDayOfAbsence),
            vacationPeriods: entity.vacationPeriods
                ? entity.vacationPeriods.map(e => new IncomeReportPeriodSerializer().serialize(e, _forceTypeHint))
                : undefined,
            reimbursementChanges: entity.reimbursementChanges
                ? entity.reimbursementChanges.map(e => new IncomeReportReimbursementChangeSerializer().serialize(e, _forceTypeHint))
                : undefined,
            employmentPayReduction: entity.employmentPayReduction
        };
    }
}
