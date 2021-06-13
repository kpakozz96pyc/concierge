
import { IncomeReportPeriodType } from "./enums/income-report-period-type";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class IncomeReportPeriod {

    static $name = "IncomeReportPeriod";
    static typeNameHint = "ALF.Shared.Dto.Models.Absence.IncomeReports.IncomeReportPeriod, ALF.Shared.Dto"

    type: IncomeReportPeriodType;
    from: Date;
    to: Date;

    constructor(data?: Partial<IncomeReportPeriod>) {
        Object.assign(this, data);
    }
}
