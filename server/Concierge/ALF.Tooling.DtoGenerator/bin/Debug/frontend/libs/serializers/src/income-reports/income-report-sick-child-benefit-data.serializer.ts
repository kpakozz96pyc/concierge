import { SickChildBenefitPartialAbsenceDaySerializer } from "./sick-child-benefit-partial-absence-day.serializer";
import { IncomeReportPeriodSerializer } from "./income-report-period.serializer";
import { Serializer } from "@alf/core/models";
import { IncomeReportSickChildBenefitData } from "@alf/models/income-reports/income-report-sick-child-benefit-data";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class IncomeReportSickChildBenefitDataSerializer implements Serializer<IncomeReportSickChildBenefitData> {

    deserialize(data: undefined): undefined
    deserialize(data: any): IncomeReportSickChildBenefitData
    deserialize(data: any): IncomeReportSickChildBenefitData | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        copy.partialAbsenceDays = (copy.partialAbsenceDays || []).map(new SickChildBenefitPartialAbsenceDaySerializer().deserialize);

        copy.sickChildBenefitPeriods = (copy.sickChildBenefitPeriods || []).map(new IncomeReportPeriodSerializer().deserialize);

        copy.vacationPeriods = (copy.vacationPeriods || []).map(new IncomeReportPeriodSerializer().deserialize);

        return new IncomeReportSickChildBenefitData(copy);
    }

    serialize(entity: IncomeReportSickChildBenefitData | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: IncomeReportSickChildBenefitData, _forceTypeHint?: boolean): any
    serialize(entity: IncomeReportSickChildBenefitData | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: entity.$type,
            type: entity.type,
            employmentPayReduction: entity.employmentPayReduction,
            hasPaidObligatoryDays: entity.hasPaidObligatoryDays,
            partialAbsenceDays: entity.partialAbsenceDays
                ? entity.partialAbsenceDays.map(e => new SickChildBenefitPartialAbsenceDaySerializer().serialize(e, _forceTypeHint))
                : undefined,
            sickChildBenefitPeriods: entity.sickChildBenefitPeriods
                ? entity.sickChildBenefitPeriods.map(e => new IncomeReportPeriodSerializer().serialize(e, _forceTypeHint))
                : undefined,
            vacationPeriods: entity.vacationPeriods
                ? entity.vacationPeriods.map(e => new IncomeReportPeriodSerializer().serialize(e, _forceTypeHint))
                : undefined
        };
    }
}
