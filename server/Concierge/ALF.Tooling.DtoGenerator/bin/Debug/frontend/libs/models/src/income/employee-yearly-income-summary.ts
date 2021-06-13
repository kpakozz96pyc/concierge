
import { IncomeTypeGrouping } from "./income-type-grouping";
import { DeductionGrouping } from "./deduction-grouping";
import { TaxGrouping } from "./tax-grouping";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export type EmployeeYearlyIncomeSummaryId = string;

export class EmployeeYearlyIncomeSummary {

    static $name = "EmployeeYearlyIncomeSummary";
    static typeNameHint = "ALF.Shared.Dto.Models.Income.EmployeeYearlyIncomeSummary, ALF.Shared.Dto"

    id: EmployeeYearlyIncomeSummaryId;
    companyId?: string;
    employeeId?: string;
    year: number;
    isFinal: boolean;
    incomeTypeGroupings: IncomeTypeGrouping[] = [];
    deductionGroupings: DeductionGrouping[] = [];
    taxGroupings: TaxGrouping[] = [];

    constructor(data?: Partial<EmployeeYearlyIncomeSummary>) {
        Object.assign(this, data);
    }
}
