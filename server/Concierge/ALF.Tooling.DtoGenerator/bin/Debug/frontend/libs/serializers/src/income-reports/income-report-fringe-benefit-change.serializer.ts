import { serializeDate } from "@alf/core";
import { Serializer } from "@alf/core/models";
import { IncomeReportFringeBenefitChange } from "@alf/models/income-reports/income-report-fringe-benefit-change";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class IncomeReportFringeBenefitChangeSerializer implements Serializer<IncomeReportFringeBenefitChange> {

    deserialize(data: undefined): undefined
    deserialize(data: any): IncomeReportFringeBenefitChange
    deserialize(data: any): IncomeReportFringeBenefitChange | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        copy.from = new Date(copy.from);

        return new IncomeReportFringeBenefitChange(copy);
    }

    serialize(entity: IncomeReportFringeBenefitChange | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: IncomeReportFringeBenefitChange, _forceTypeHint?: boolean): any
    serialize(entity: IncomeReportFringeBenefitChange | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? IncomeReportFringeBenefitChange.typeNameHint : undefined,
            type: entity.type,
            from: serializeDate(entity.from),
            amountPerMonth: entity.amountPerMonth,
            employerPays: entity.employerPays
        };
    }
}
