import { IncomeTypeGroupingSerializer } from "./income-type-grouping.serializer";
import { DeductionGroupingSerializer } from "./deduction-grouping.serializer";
import { TaxGroupingSerializer } from "./tax-grouping.serializer";
import { Serializer } from "@alf/core/models";
import { EmployeeYearlyIncomeSummary } from "@alf/models/income/employee-yearly-income-summary";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class EmployeeYearlyIncomeSummarySerializer implements Serializer<EmployeeYearlyIncomeSummary> {

    deserialize(data: undefined): undefined
    deserialize(data: any): EmployeeYearlyIncomeSummary
    deserialize(data: any): EmployeeYearlyIncomeSummary | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        copy.incomeTypeGroupings = (copy.incomeTypeGroupings || []).map(new IncomeTypeGroupingSerializer().deserialize);

        copy.deductionGroupings = (copy.deductionGroupings || []).map(new DeductionGroupingSerializer().deserialize);

        copy.taxGroupings = (copy.taxGroupings || []).map(new TaxGroupingSerializer().deserialize);

        return new EmployeeYearlyIncomeSummary(copy);
    }

    serialize(entity: EmployeeYearlyIncomeSummary | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: EmployeeYearlyIncomeSummary, _forceTypeHint?: boolean): any
    serialize(entity: EmployeeYearlyIncomeSummary | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? EmployeeYearlyIncomeSummary.typeNameHint : undefined,
            id: entity.id,
            companyId: entity.companyId,
            employeeId: entity.employeeId,
            year: entity.year,
            isFinal: entity.isFinal,
            incomeTypeGroupings: entity.incomeTypeGroupings
                ? entity.incomeTypeGroupings.map(e => new IncomeTypeGroupingSerializer().serialize(e, _forceTypeHint))
                : undefined,
            deductionGroupings: entity.deductionGroupings
                ? entity.deductionGroupings.map(e => new DeductionGroupingSerializer().serialize(e, _forceTypeHint))
                : undefined,
            taxGroupings: entity.taxGroupings
                ? entity.taxGroupings.map(e => new TaxGroupingSerializer().serialize(e, _forceTypeHint))
                : undefined
        };
    }
}
