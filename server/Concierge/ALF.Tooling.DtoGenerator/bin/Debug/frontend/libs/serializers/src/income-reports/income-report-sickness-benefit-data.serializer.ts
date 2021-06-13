import { IncomeReportPeriodSerializer } from "./income-report-period.serializer";
import { IncomeReportReimbursementChangeSerializer } from "./income-report-reimbursement-change.serializer";
import { serializeDate } from "@alf/core";
import { Serializer } from "@alf/core/models";
import { IncomeReportSicknessBenefitData } from "@alf/models/income-reports/income-report-sickness-benefit-data";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class IncomeReportSicknessBenefitDataSerializer implements Serializer<IncomeReportSicknessBenefitData> {

    deserialize(data: undefined): undefined
    deserialize(data: any): IncomeReportSicknessBenefitData
    deserialize(data: any): IncomeReportSicknessBenefitData | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        if (copy.firstDayOfAbsence !== undefined)
            copy.firstDayOfAbsence = new Date(copy.firstDayOfAbsence);

        copy.employerPeriods = (copy.employerPeriods || []).map(new IncomeReportPeriodSerializer().deserialize);

        copy.reimbursementChanges = (copy.reimbursementChanges || []).map(new IncomeReportReimbursementChangeSerializer().deserialize);

        return new IncomeReportSicknessBenefitData(copy);
    }

    serialize(entity: IncomeReportSicknessBenefitData | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: IncomeReportSicknessBenefitData, _forceTypeHint?: boolean): any
    serialize(entity: IncomeReportSicknessBenefitData | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: entity.$type,
            type: entity.type,
            firstDayOfAbsence: serializeDate(entity.firstDayOfAbsence),
            employerPeriodGrossPaid: entity.employerPeriodGrossPaid,
            employerPeriodPayReduction: entity.employerPeriodPayReduction,
            employerPeriods: entity.employerPeriods
                ? entity.employerPeriods.map(e => new IncomeReportPeriodSerializer().serialize(e, _forceTypeHint))
                : undefined,
            reimbursementChanges: entity.reimbursementChanges
                ? entity.reimbursementChanges.map(e => new IncomeReportReimbursementChangeSerializer().serialize(e, _forceTypeHint))
                : undefined
        };
    }
}
