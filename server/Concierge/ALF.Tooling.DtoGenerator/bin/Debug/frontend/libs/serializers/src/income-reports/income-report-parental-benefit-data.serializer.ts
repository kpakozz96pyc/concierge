import { IncomeReportReimbursementChangeSerializer } from "./income-report-reimbursement-change.serializer";
import { serializeDate } from "@alf/core";
import { Serializer } from "@alf/core/models";
import { IncomeReportParentalBenefitData } from "@alf/models/income-reports/income-report-parental-benefit-data";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class IncomeReportParentalBenefitDataSerializer implements Serializer<IncomeReportParentalBenefitData> {

    deserialize(data: undefined): undefined
    deserialize(data: any): IncomeReportParentalBenefitData
    deserialize(data: any): IncomeReportParentalBenefitData | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        copy.reimbursementChanges = (copy.reimbursementChanges || []).map(new IncomeReportReimbursementChangeSerializer().deserialize);

        copy.startDate = new Date(copy.startDate);

        return new IncomeReportParentalBenefitData(copy);
    }

    serialize(entity: IncomeReportParentalBenefitData | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: IncomeReportParentalBenefitData, _forceTypeHint?: boolean): any
    serialize(entity: IncomeReportParentalBenefitData | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: entity.$type,
            type: entity.type,
            reimbursementChanges: entity.reimbursementChanges
                ? entity.reimbursementChanges.map(e => new IncomeReportReimbursementChangeSerializer().serialize(e, _forceTypeHint))
                : undefined,
            startDate: serializeDate(entity.startDate)
        };
    }
}
