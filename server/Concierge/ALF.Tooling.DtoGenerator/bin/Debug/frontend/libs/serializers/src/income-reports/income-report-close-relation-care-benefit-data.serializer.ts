﻿import { IncomeReportReimbursementChangeSerializer } from "./income-report-reimbursement-change.serializer";
import { IncomeReportPeriodSerializer } from "./income-report-period.serializer";
import { serializeDate } from "@alf/core";
import { Serializer } from "@alf/core/models";
import { IncomeReportCloseRelationCareBenefitData } from "@alf/models/income-reports/income-report-close-relation-care-benefit-data";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class IncomeReportCloseRelationCareBenefitDataSerializer implements Serializer<IncomeReportCloseRelationCareBenefitData> {

    deserialize(data: undefined): undefined
    deserialize(data: any): IncomeReportCloseRelationCareBenefitData
    deserialize(data: any): IncomeReportCloseRelationCareBenefitData | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        copy.firstDayOfAbsence = new Date(copy.firstDayOfAbsence);

        copy.reimbursementChanges = (copy.reimbursementChanges || []).map(new IncomeReportReimbursementChangeSerializer().deserialize);

        copy.vacationPeriods = (copy.vacationPeriods || []).map(new IncomeReportPeriodSerializer().deserialize);

        return new IncomeReportCloseRelationCareBenefitData(copy);
    }

    serialize(entity: IncomeReportCloseRelationCareBenefitData | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: IncomeReportCloseRelationCareBenefitData, _forceTypeHint?: boolean): any
    serialize(entity: IncomeReportCloseRelationCareBenefitData | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: entity.$type,
            type: entity.type,
            firstDayOfAbsence: serializeDate(entity.firstDayOfAbsence),
            reimbursementChanges: entity.reimbursementChanges
                ? entity.reimbursementChanges.map(e => new IncomeReportReimbursementChangeSerializer().serialize(e, _forceTypeHint))
                : undefined,
            employmentPayReduction: entity.employmentPayReduction,
            vacationPeriods: entity.vacationPeriods
                ? entity.vacationPeriods.map(e => new IncomeReportPeriodSerializer().serialize(e, _forceTypeHint))
                : undefined
        };
    }
}
