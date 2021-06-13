import { Serializer } from "@alf/core/models";
import { NewAbsenceCaseIncomeReport } from "@alf/models/income-reports/new-absence-case-income-report";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class NewAbsenceCaseIncomeReportSerializer implements Serializer<NewAbsenceCaseIncomeReport> {

    deserialize(data: undefined): undefined
    deserialize(data: any): NewAbsenceCaseIncomeReport
    deserialize(data: any): NewAbsenceCaseIncomeReport | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };

        return new NewAbsenceCaseIncomeReport(copy);
    }

    serialize(entity: NewAbsenceCaseIncomeReport | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: NewAbsenceCaseIncomeReport, _forceTypeHint?: boolean): any
    serialize(entity: NewAbsenceCaseIncomeReport | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? NewAbsenceCaseIncomeReport.typeNameHint : undefined,
            absenceCaseId: entity.absenceCaseId,
            absenceCaseEmploymentGroupId: entity.absenceCaseEmploymentGroupId
        };
    }
}
